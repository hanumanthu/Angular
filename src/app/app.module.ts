import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestAppComponent } from './test-app/test-app.component';

@NgModule({
  declarations: [
    AppComponent,
    TestAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TestAppComponent]
})
export class AppModule { }
