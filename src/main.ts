// File: main.ts
// Student's Name: Wan Kei Hui
// Student ID: 301266228
// Date: 11-6-2023
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
