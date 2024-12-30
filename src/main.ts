import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TpDevOpsComponent } from './app/tp-dev-ops/tp-dev-ops.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(TpDevOpsComponent, appConfig)
  .catch((err) => console.error(err));
