import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

// AG Grid Forensic Module Registration
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// Execute registration before application bootstrap
ModuleRegistry.registerModules([AllCommunityModule]);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([])
  ]
};
