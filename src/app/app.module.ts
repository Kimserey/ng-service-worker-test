import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// ,
//   "dataGroups": [
//     {
//       "name": "api",
//       "urls": [
//         "localhost:5001/api/persons",
//         "localhost:5001/api/companies"
//       ],
//       "cacheConfig": {
//         "maxSize": 100,
//         "maxAge": "5m"
//       }
//     }
//   ]