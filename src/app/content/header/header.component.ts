import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ControlsService } from '../../controls/controls.service';
import { StylesModel } from '../../models/StylesModel';
@Component({
    selector: 'app-content-dynamic-header',
    templateUrl: 'header.html',
    styleUrls: ['header.html']
})

export class HeaderContentComponent implements OnInit, AfterViewInit {
    header: StylesModel;
    styles: CSSStyleDeclaration = {} as any;
    className = 'header';
    id = '';
    @ViewChild('header') HEADER: ElementRef;
    constructor(private controlsService: ControlsService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        console.log(this.controlsService.header);
        this.controlsService.header.element = this.HEADER.nativeElement;
        this.controlsService.header.class.name = this.className;
        this.controlsService.header.class.styles = this.styles;
        this.controlsService.header.id = this.id;
        console.log('init header content : ', this.styles);
        this.header = this.controlsService.header;
    }
}
