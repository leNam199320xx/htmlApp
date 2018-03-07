import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommonService } from '../services/common.service';
import { LoaderService } from '../services/loader.service';
import { ControlsComponent } from '../app/controls/controls.component';
import { ContentComponent } from '../app/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { BodyContentComponent } from './content/body/body.component';
import { HeaderContentComponent } from './content/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ControlsComponent,
    BodyContentComponent,
    HeaderContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CommonService,
    LoaderService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    BodyContentComponent,
    HeaderContentComponent
  ]
})
export class AppModule { }
