import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ControlsService } from '../controls.service';
import { StylesModel } from '../../models/StylesModel';
import { NamSelectModel } from '../../namcontrols/model/NamSelectModel';
@Component({
    selector: 'app-controls-header',
    templateUrl: 'header.html'
})


export class HeaderControlsComponent implements OnInit, AfterViewInit {
    private header: StylesModel;

    headerSizeOptions: NamSelectModel[] = [
        { text: 'small', value: HeaderSizeDefine.small.toString(), selected: true },
        { text: 'normal', value: HeaderSizeDefine.normal.toString(), selected: false },
        { text: 'large', value: HeaderSizeDefine.large.toString(), selected: false }
    ];
    colorOptions: NamSelectModel[] = [
        { text: 'red', value: 'red', selected: true },
        { text: 'blue', value: 'blue', selected: false },
        { text: 'white', value: 'white', selected: false },
        { text: 'yellow', value: 'yellow', selected: false },
        { text: 'gray', value: 'gray', selected: false }
    ];
    navAlignOptions: NamSelectModel[] = [
        { text: 'căn trái', value: 'left', selected: true },
        { text: 'căn giữa', value: 'center', selected: false },
        { text: 'căn phải', value: 'right', selected: false }
    ];

    @ViewChild('headerHeight') HeaderHeightElement: ElementRef;
    @ViewChild('headerFontSize') HeaderFontSizeElement: ElementRef;
    @ViewChild('headerBackgroundColor') HeaderBackgroundColorElement: ElementRef;
    @ViewChild('headerColor') HeaderColor: ElementRef;

    sHeight: HTMLSelectElement;
    sColor: HTMLSelectElement;
    sBackgroundColor: HTMLSelectElement;

    constructor(private controlsService: ControlsService) {
        this.header = this.controlsService.header;
    }

    ngAfterViewInit() {
    }

    ngOnInit() {
        this.sBackgroundColor = (<any>this.HeaderBackgroundColorElement).select.nativeElement;
        this.sHeight = (<any>this.HeaderHeightElement).select.nativeElement;
        this.sColor = (<any>this.HeaderColor).select.nativeElement;

        this.sBackgroundColor.selectedIndex = 0;
        this.sHeight.selectedIndex = 0;
        this.sColor.selectedIndex = 0;

        setTimeout(() => {
            this.setDefault();
        }, 2000);
    }

    selectHeader() {
        const val = parseInt(this.sHeight.value, 10);
        this.header.class.styles.height = val + 'px';
        this.updateLayout();
    }

    selectBackgroundColor() {
        const val = this.sBackgroundColor.value;
        this.header.class.styles.backgroundColor = val;
        this.updateLayout();
    }
    selectColor() {
        const val = this.sColor.value;
        this.header.class.styles.color = val;
        this.updateLayout();
    }

    inpHeaderFontSize(event: Event) {
        const val = parseInt((<HTMLSelectElement>event.target).value, 10);
        this.header.class.styles.fontSize = val + 'px';
        this.updateLayout();
    }

    inpBackgroundColor(event: Event) {
        const val = (<HTMLSelectElement>event.target).value;
        this.header.class.styles.backgroundColor = val;
        this.updateLayout();
    }

    inpColor(event: Event) {
        const val = (<HTMLSelectElement>event.target).value;
        this.header.class.styles.color = val;
        this.updateLayout();
    }

    setDefault() {
        this.selectHeader();
        this.selectBackgroundColor();
        this.selectColor();
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

    updateLayout() {
        this.controlsService.update();
    }

}

export enum HeaderSizeDefine {
    small = 40,
    normal = 64,
    large = 80
}
