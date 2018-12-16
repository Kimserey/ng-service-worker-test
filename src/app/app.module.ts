import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ContentComponent } from './content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    data: { title: 'Heroes List' }
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always'
    }),

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }