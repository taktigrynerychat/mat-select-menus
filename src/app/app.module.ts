import { NgModule } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionsComponent } from './actions/actions.component';
import { DropdownStyleActionsDirective } from './dropdown-style-actions.directive';
import { OptionTemplateDirective } from './option-template.directive';
import { CustomOptionComponent } from './custom-option/custom-option.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    DropdownStyleActionsDirective,
    OptionTemplateDirective,
    CustomOptionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
