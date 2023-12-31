import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudFormComponent } from './shared/component/stud-form/stud-form.component';
import { StdTableComponent } from './shared/component/std-table/std-table.component';
import { EmpFormComponent } from './shared/component/emp-form/emp-form.component';
import { EmpTableComponent } from './shared/component/emp-table/emp-table.component';
import { ProdFromComponent } from './shared/component/prod-from/prod-from.component';
import { ProdCardComponent } from './shared/component/prod-card/prod-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StudFormComponent,
    StdTableComponent,
    EmpFormComponent,
    EmpTableComponent,
    ProdFromComponent,
    ProdCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
