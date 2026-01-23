import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CddReport } from '../models/cdd-report.model';

@Component({
  selector: 'app-case-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-detail.component.html',
  styles: [`
    :host { display: block; }
  `]
})
export class CaseDetailComponent implements OnInit {
  @Input() cddReport?: CddReport;

  ngOnInit() {
    // If no CDD report is provided, use mock data for UI testing
    // TODO: Replace with actual Firestore data when available
    // Example: this.cddReport = doc.data()['cddReport'] as CddReport;
    if (!this.cddReport) {
      this.cddReport = {
        customerIdentification: {
          clientName: 'Example Only',
          dateOfBirth: '01 Jan 1970',
          driversLicenceNumber: '0000000',
          licenceExpiryDate: '01 Jan 2030',
          addressOnLicence: '123 Example St, Testville NSW 2000'
        },
        proofOfAddress: {
          documentType: 'Utility bill',
          accountHolder: 'Example Only',
          serviceAddress: '123 Example St, Testville NSW 2000',
          issueDate: '01 Oct 2025',
          abnOfProvider: '00 000 000 000'
        }
      };
    }
  }
}

