import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeSkillsComponent } from './components/employee-skills/employee-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
