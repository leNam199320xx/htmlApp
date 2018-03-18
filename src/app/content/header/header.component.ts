import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ControlsService } from '../../controls/controls.service';
import { StylesModel } from '../../models/StylesModel';
@Component({
    selector: 'app-content-dynamic-header',
    templateUrl: 'header.html',
    styleUrls: ['header.html']
})

export class HeaderContentComponent implements OnInit, AfterViewInit {
    @ViewChild('header') HEADER: ElementRef;
    constructor(private controlsService: ControlsService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.controlsService.header.element = this.HEADER.nativeElement;
    }
}
