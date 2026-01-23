export interface CustomerIdentification {
  clientName: string;
  dateOfBirth: string;
  driversLicenceNumber: string;
  licenceExpiryDate: string;
  addressOnLicence: string;
}

export interface ProofOfAddress {
  documentType: string;
  accountHolder: string;
  serviceAddress: string;
  issueDate: string;
  abnOfProvider: string;
}

export interface BusinessRegistration {
  entityName: string;
  abn: string;
  entityType: string;
  gstStatus: string;
  mainBusinessLocation: string;
  tradingName: string;
}

export interface SourceOfFunds {
  account: string;
  bsb: string;
  accountNumber: string;
  statementPeriod: string;
}

export interface CddReport {
  customerIdentification: CustomerIdentification;
  proofOfAddress: ProofOfAddress;
  businessRegistration?: BusinessRegistration;
  sourceOfFunds?: SourceOfFunds;
}

