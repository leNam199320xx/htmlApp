import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ControlsService } from '../controls.service';
import { HeaderModel } from '../../models/HeaderModel';
import { NamSelectModel } from '../../namcontrols/model/NamSelectModel';
@Component({
    selector: 'app-controls-header',
    templateUrl: 'header.html'
})


export class HeaderControlsComponent implements OnInit {
    private currentHeader: HeaderModel;
    private defaultHeader: HeaderModel = {
        fontSize: 10,
        height: HeaderSizeDefine.normal,
        backgroundColor: 'blue',
        color: 'white',
        element: null
    };
    headerSizeOptions: NamSelectModel[] = [
        { text: 'small', value: HeaderSizeDefine.small.toString() },
        { text: 'normal', value: HeaderSizeDefine.normal.toString() },
        { text: 'large', value: HeaderSizeDefine.large.toString() }
    ];
    colorOptions: NamSelectModel[] = [
        { text: 'red', value: 'red' },
        { text: 'blue', value: 'blue' },
        { text: 'white', value: 'white' },
        { text: 'yellow', value: 'yellow' },
        { text: 'gray', value: 'gray' }
    ];
    navAlignOptions: NamSelectModel[] = [
        { text: 'căn trái', value: 'left' },
        { text: 'căn giữa', value: 'center' },
        { text: 'căn phải', value: 'right' },
    ];
    header: HTMLElement;

    @ViewChild('headerHeight') HeaderHeightElement: ElementRef;
    @ViewChild('headerFontSize') HeaderFontSizeElement: ElementRef;
    @ViewChild('headerBackgroundColor') HeaderBackgroundColorElement: ElementRef;

    constructor(private controlsService: ControlsService) {
    }

    ngOnInit() {
        this.currentHeader = this.controlsService.header;
        if (!this.controlsService.headerCreated) {
            this.controlsService.headerCreated = true;
            this.setDefault();
        }
    }

    selectHeader(event: Event) {
        const val = parseInt((<HTMLSelectElement>event.target).value, 10);
        this.currentHeader.height = val;
        this.updateLayout();
    }

    selectBackgroundColor(event: Event) {
        const val = (<HTMLSelectElement>event.target).value;
        this.currentHeader.backgroundColor = val;
        this.updateLayout();
    }
    selectColor(event: Event) {
        const val = (<HTMLSelectElement>event.target).value;
        this.currentHeader.color = val;
        this.updateLayout();
    }

    inpHeaderFontSize(event: Event) {
        const val = parseInt((<HTMLSelectElement>event.target).value, 10);
        this.currentHeader.fontSize = val;
        this.updateLayout();
    }

    inpBackgroundColor(event: Event) {
        const val = (<HTMLSelectElement>event.target).value;
        this.currentHeader.backgroundColor = val;
        this.updateLayout();
    }

    inpColor(event: Event) {
        const val = (<HTMLSelectElement>event.target).value;
        this.currentHeader.color = val;
        this.updateLayout();
    }

    setDefault() {
        this.currentHeader.height = this.defaultHeader.height;
        this.currentHeader.fontSize = this.defaultHeader.fontSize;
        this.currentHeader.backgroundColor = this.defaultHeader.backgroundColor;
        this.currentHeader.color = this.defaultHeader.color;
        this.updateLayout();
    }

    alignNavLeft(event: Event) {
        console.log('căn trái');
    }

    alignNavRight(event: Event) {
        console.log('căn phải');
    }

    alignNavCenter(event: Event) {
        console.log('căn giữa');
    }

    addNavTop(event: Event) {
        console.log('add nav');
    }

    updateValueOftControls() {
        this.HeaderFontSizeElement.nativeElement.value = this.defaultHeader.fontSize;
    }

    updateLayout() {
        this.header = <HTMLElement>this.currentHeader.element.nativeElement;
        this.header.style.height = this.currentHeader.height + 'px';
        this.header.style.fontSize = this.currentHeader.fontSize + 'px';
        this.header.style.backgroundColor = this.currentHeader.backgroundColor;
        this.header.style.color = this.currentHeader.color;
        this.updateValueOftControls();
    }

}

export enum HeaderSizeDefine {
    small = 40,
    normal = 64,
    large = 80
}
