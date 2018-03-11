import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamButtonComponent } from './button/nam-button.component';
import { NamSelectComponent } from './select/nam-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NamButtonComponent, NamSelectComponent],
  exports: [NamButtonComponent, NamSelectComponent]
})
export class NamControlsModule { }
