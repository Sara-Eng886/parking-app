import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';  // Import your appConfig if needed

bootstrapApplication(AppComponent, appConfig)  // Use bootstrapApplication instead of platformBrowserDynamic().bootstrapModule
  .catch(err => console.error(err));
