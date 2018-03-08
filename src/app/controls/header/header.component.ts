import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ControlsService } from '../controls.service';
import { HeaderModel } from '../../models/HeaderModel';
@Component({
    selector: 'app-controls-header',
    templateUrl: 'header.html',
    styleUrls: ['header.scss']
})


export class HeaderControlsComponent implements OnInit {
    private currentHeader: HeaderModel;
    private defaultHeader: HeaderModel = {
        fontSize: 10,
        height: HeaderSizeDefine.normal,
        element: null
    };
    headerSize = HeaderSizeDefine;

    @ViewChild('headerHeight') HeaderHeightElement: ElementRef;
    @ViewChild('headerFontSize') HeaderFontSizeElement: ElementRef;
    @ViewChild('headerBackgroundColor') HeaderBackgroundColorElement: ElementRef;

    constructor(private controlsService: ControlsService) {
    }

    ngOnInit() {
        this.currentHeader = this.controlsService.header;
        this.setDefault();
    }

    selectHeader(event: Event) {
        const val = parseInt((<HTMLSelectElement>event.target).value, 10);
        this.currentHeader.height = val;
        this.updateLayout();
    }

    selectBackgroundColor(event: Event) {
        // const val = (<HTMLSelectElement>event.target).value;
        // this.currentHeader.fontSize = val;
        // this.updateLayout();
    }

    inpHeaderFontSize(event: Event) {
        const val = parseInt((<HTMLSelectElement>event.target).value, 10);
        this.currentHeader.fontSize = val;
        this.updateLayout();
    }

    setDefault() {
        this.currentHeader.height = this.defaultHeader.height;
        this.currentHeader.fontSize = this.defaultHeader.fontSize;

        this.updateValueOftControls();
        this.updateLayout();
    }

    updateValueOftControls() {
        this.HeaderFontSizeElement.nativeElement.value = this.defaultHeader.fontSize;

    }

    updateLayout() {
        this.currentHeader.element.nativeElement.style.height = this.currentHeader.height + 'px';
        this.currentHeader.element.nativeElement.style.fontSize = this.currentHeader.fontSize + 'px';
        // this.currentHeader.element.nativeElement.style.lineHeight = this.currentHeader.fontSize + 'px';
    }

}

export enum HeaderSizeDefine {
    small = 40,
    normal = 64,
    large = 80
}
