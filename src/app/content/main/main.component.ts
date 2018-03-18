import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { GridModel } from '../grid/grid.component';
import { ControlsService } from '../../controls/controls.service';

@Component({
    selector: 'app-content-dynamic-main',
    templateUrl: 'main.html'
})

export class MainContentComponent implements OnInit {
    @ViewChild('body') MAIN: ElementRef; // this is a component
    constructor(private controlsService: ControlsService) {
    }

    ngOnInit() {
        this.controlsService.body.element = this.MAIN.nativeElement;
    }
}
