import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';

import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  ...appConfig, // ✅ Spread appConfig to merge providers
  providers: [
    provideRouter(routes), // ✅ Provide routing
    importProvidersFrom(HttpClientModule) // ✅ Provide HttpClientModule
  ]
}).catch(err => console.error(err));
