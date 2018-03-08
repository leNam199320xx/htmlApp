import { Component, Inject, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ControlsService } from '../../controls/controls.service';
import { HeaderModel } from '../../models/HeaderModel';
@Component({
    selector: 'app-content-dynamic-header',
    templateUrl: 'header.html',
    styleUrls: ['header.html']
})

export class HeaderContentComponent implements OnInit {
    defaultHeader: HeaderModel = {
        height: 0,
        fontSize: 0,
        element: null
    };
    currentHeader = this.defaultHeader;

    @ViewChild('header') Header: ElementRef;

    constructor(private controlsService: ControlsService) {
        controlsService.header = this.currentHeader;
    }

    ngOnInit() {
        this.currentHeader.element = this.Header;
    }
}
