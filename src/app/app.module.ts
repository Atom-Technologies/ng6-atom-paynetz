import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ResponseComponent } from './response/response.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  {
    path: 'response',
    component: ResponseComponent,
    pathMatch: 'full'
  },
  {
    path: 'request',
    component: RequestComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ResponseComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
