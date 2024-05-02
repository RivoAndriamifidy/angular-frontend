import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule, HttpClient, HttpXhrBackend } from '@angular/common/http';
import { FetchHttpClientFactory } from './fetch-http-client-factory.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'your-app-id' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    { provide: HttpXhrBackend, useClass: HttpXhrBackend },
    { provide: HttpClient, useFactory: (backend: HttpXhrBackend) => new HttpClient(backend), deps: [HttpXhrBackend] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
