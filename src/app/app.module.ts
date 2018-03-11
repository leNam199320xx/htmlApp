import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NamControlsModule } from './namcontrols/namcontrols.module';

import { CommonService } from '../services/common.service';
import { WindowService } from '../services/window.service';
import { LoaderService } from '../services/loader.service';
import { ControlsService } from './controls/controls.service';

import { AppComponent } from './app.component';
import { ControlsComponent } from '../app/controls/controls.component';
import { HeaderControlsComponent } from '../app/controls/header/header.component';
import { MainControlsComponent } from '../app/controls/main/main.component';
import { FooterControlsComponent } from '../app/controls/footer/footer.component';
import { ContentComponent } from '../app/content/content.component';

import { BodyContentComponent } from './content/body/body.component';
import { HeaderContentComponent } from './content/header/header.component';
import { MainContentComponent } from './content/main/main.component';
import { FooterContentComponent } from './content/footer/footer.component';
import { GridContentComponent } from './content/grid/grid.component';
import { ButtonContentComponent } from './content/Button/button.component';

// import {HeaderModel} from './models/HeaderModel';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ControlsComponent,
    HeaderControlsComponent,
    MainControlsComponent,
    FooterControlsComponent,
    ControlsComponent,
    BodyContentComponent,
    HeaderContentComponent,
    MainContentComponent,
    FooterContentComponent,
    GridContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NamControlsModule
  ],
  providers: [
    WindowService,
    CommonService,
    LoaderService,
    ControlsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    BodyContentComponent
  ]
})
export class AppModule { }
