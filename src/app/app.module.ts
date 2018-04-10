import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF, Location } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SnowInterceptor } from './services/snow.interceptor';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  { path: '', component: TestComponent }
  //{ path: '/test', component: TestComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash : true}),
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SnowInterceptor, multi: true },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
