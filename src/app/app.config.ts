import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app-routing.module';  // ✅ Import routes correctly
import { provideStore } from '@ngrx/store';
import { counterReducer } from './counter.reducer';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    provideStore({ count: counterReducer })]
};
