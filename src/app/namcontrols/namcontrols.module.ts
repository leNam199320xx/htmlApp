import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamButtonComponent } from './button/nam-button.component';
import { NamSelectComponent } from './select/nam-select.component';
import { NamAreaComponent } from './area/nam-area.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NamButtonComponent,
    NamSelectComponent,
    NamAreaComponent],
  exports: [NamButtonComponent,
    NamSelectComponent,
    NamAreaComponent]
})
export class NamControlsModule { }
