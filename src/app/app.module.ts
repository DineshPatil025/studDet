import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudFormComponent } from './shared/component/stud-form/stud-form.component';
import { StdTableComponent } from './shared/component/std-table/std-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StudFormComponent,
    StdTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
