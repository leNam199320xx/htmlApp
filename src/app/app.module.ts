import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonService } from '../services/common.service';
import { WindowService } from '../services/window.service';
import { LoaderService } from '../services/loader.service';
import { ControlsComponent } from '../app/controls/controls.component';
import { ContentComponent } from '../app/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { BodyContentComponent } from './content/body/body.component';
import { HeaderContentComponent } from './content/header/header.component';
import { MainContentComponent } from './content/main/main.component';
import { FooterContentComponent } from './content/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ControlsComponent,
    BodyContentComponent,
    HeaderContentComponent,
    MainContentComponent,
    FooterContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WindowService,
    CommonService,
    LoaderService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    BodyContentComponent
  ]
})
export class AppModule { }
