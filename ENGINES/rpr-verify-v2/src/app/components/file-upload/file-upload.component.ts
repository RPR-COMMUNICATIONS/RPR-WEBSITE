import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-file-upload',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.scss']
})
export class FileUploadComponent {
    @Output() onDataParsed = new EventEmitter<any[]>();

    isDragging = false;

    onDragOver(event: DragEvent) {
        event.preventDefault();
        this.isDragging = true;
    }

    onDragLeave() {
        this.isDragging = false;
    }

    onDrop(event: DragEvent) {
        event.preventDefault();
        this.isDragging = false;
        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
            this.processFile(files[0]);
        }
    }

    onFileSelected(event: any) {
        const files = event.target.files;
        if (files && files.length > 0) {
            this.processFile(files[0]);
        }
    }

    private processFile(file: File) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            try {
                const text = e.target.result;
                const data = JSON.parse(text); // Assuming JSON for this manifest
                if (Array.isArray(data)) {
                    this.onDataParsed.emit(data);
                }
            } catch (err) {
                console.error('Ingestion Breach: Invalid manifest format.');
            }
        };
        reader.readAsText(file);
    }
}
