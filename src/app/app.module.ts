import { NgModule } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenusWithOptionsComponent } from './actions/menus-with-options.component';
import { DropdownStyleActionsDirective } from './dropdown-style-actions.directive';
import { OptionTemplateDirective } from './option-template.directive';
import { CustomOptionComponent } from './custom-option/custom-option.component';

@NgModule({
  declarations: [
    AppComponent,
    MenusWithOptionsComponent,
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
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
