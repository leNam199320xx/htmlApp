import { Component, HostListener } from '@angular/core';
import { WindowService } from '../services/window.service';
@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private windowService: WindowService) {
    console.log(this.windowService.currentBreakpoint);
  }

  @HostListener('window:resize', ['$event']) onResize(event: Event) {
    this.windowService.setBreakpoint();
    console.log(this.windowService.currentBreakpoint);
  }
}
