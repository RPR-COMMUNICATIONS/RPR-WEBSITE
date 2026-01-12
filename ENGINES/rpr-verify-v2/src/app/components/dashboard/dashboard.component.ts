import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { FileUploadComponent } from '../file-upload/file-upload.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, AgGridAngular, FileUploadComponent],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    columnDefs: ColDef[] = [
        { field: 'manifestId', headerName: 'MANIFEST ID', flex: 1, sortable: true, filter: true },
        { field: 'timestamp', headerName: 'TIMESTAMP', flex: 1 },
        { field: 'origin', headerName: 'SOURCE ORIGIN', flex: 1 },
        {
            field: 'status',
            headerName: 'STATUS',
            cellClassRules: {
                'text-red-600 font-bold': (params: any) => params.value === 'DISCREPANCY',
                'text-green-500': (params: any) => params.value === 'VERIFIED'
            }
        }
    ];

    rowData: any[] = [
        { manifestId: 'RPR-8821', timestamp: '2026-01-11 09:00', origin: 'Singapore Node', status: 'VERIFIED' },
        { manifestId: 'RPR-9932', timestamp: '2026-01-11 09:45', origin: 'London Vault', status: 'DISCREPANCY' },
        { manifestId: 'RPR-1044', timestamp: '2026-01-11 10:30', origin: 'Local Lab', status: 'VERIFIED' }
    ];

    themeClass = "ag-theme-alpine-dark";
}
