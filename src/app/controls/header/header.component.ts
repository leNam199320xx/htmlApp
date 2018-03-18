import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ControlsService, ItemControl } from '../controls.service';
import { StylesModel } from '../../models/StylesModel';
import { NamSelectModel } from '../../namcontrols/model/NamSelectModel';
@Component({
    selector: 'app-controls-header',
    templateUrl: 'header.html'
})


export class HeaderControlsComponent implements OnInit, AfterViewInit {
    private header: ItemControl;

    headerSizeOptions: NamSelectModel[] = [
        { text: 'small', value: HeaderSizeDefine.small.toString(), selected: true },
        { text: 'normal', value: HeaderSizeDefine.normal.toString(), selected: false },
        { text: 'large', value: HeaderSizeDefine.large.toString(), selected: false }];
    colorOptions: NamSelectModel[] = [
        { text: 'red', value: 'red', selected: true },
        { text: 'blue', value: 'blue', selected: false },
        { text: 'white', value: 'white', selected: false },
        { text: 'yellow', value: 'yellow', selected: false },
        { text: 'gray', value: 'gray', selected: false }];
    navAlignOptions: NamSelectModel[] = [
        { text: 'căn trái', value: 'left', selected: true },
        { text: 'căn giữa', value: 'center', selected: false },
        { text: 'căn phải', value: 'right', selected: false }];
    headerGridOptions: NamSelectModel[] = [
        { text: '1', value: '1', selected: true },
        { text: '2', value: '2', selected: false },
        { text: '3', value: '3', selected: false },
        { text: '4', value: '4', selected: false }];


    @ViewChild('headerHeight') HeaderHeight: ElementRef;
    @ViewChild('headerFontSize') HeaderFontSize: ElementRef;
    @ViewChild('headerBackgroundColor') HeaderBackgroundColor: ElementRef;
    @ViewChild('headerColor') HeaderColor: ElementRef;
    @ViewChild('headerGrid') HeaderGrid: ElementRef;

    sHeight: HTMLSelectElement;
    sColor: HTMLSelectElement;
    sBackgroundColor: HTMLSelectElement;
    sGrid: HTMLSelectElement;

    constructor(private controlsService: ControlsService) {
        this.header = this.controlsService.header;
        this.header.element.style.display = 'flex';
        this.header.element.style.flexDirection = 'row';
        this.header.element.style.flexWrap = 'wrap';
        this.header.element.style.width = '100%';
        this.controlsService.headerFixed(true);
    }

    ngAfterViewInit() {
        this.setDefault();
    }

    ngOnInit() {
        this.sBackgroundColor = <HTMLSelectElement>(<any>this.HeaderBackgroundColor).select.nativeElement;
        this.sColor = <HTMLSelectElement>(<any>this.HeaderColor).select.nativeElement;
        this.sHeight = <HTMLSelectElement>(<any>this.HeaderHeight).select.nativeElement;
        this.sGrid = <HTMLSelectElement>(<any>this.HeaderGrid).select.nativeElement;
        this.sBackgroundColor.selectedindex = 0;
        this.sHeight.selectedindex = 0;
        this.sColor.selectedindex = 0;
        this.sGrid.selectedindex = 0;
    }
    selectGrid() {
        const val = parseInt(this.sGrid.value, 10);
        this.header.removeAll();
        for (let i = 0; i < val; i++) {
            const child = this.header.addChild();
            // set default for child item
            child.changeSize((100 / val) + '%', '100%');
        }
    }
    selectHeader() {
        this.header.changeSize('100%', parseInt(this.sHeight.value, 10) + 'px');
        this.controlsService.updateBodyPosition();
    }

    selectBackgroundColor() {
        this.header.changeBackground(this.sBackgroundColor.value);
    }
    selectColor() {
        this.header.changeColor(this.sColor.val);
    }

    inpHeaderFontSize(event: Event) {
        this.header.changeFontSize((<HTMLSelectElement>event.target).value + 'px');
    }

    inpBackgroundColor(event: Event) {
        this.header.changeBackground((<HTMLSelectElement>event.target).value);
    }

    inpColor(event: Event) {
        this.header.changeColor((<HTMLSelectElement>event.target).value);
    }

    setDefault() {
        this.selectHeader();
        this.selectBackgroundColor();
        this.selectColor();
        this.selectGrid();
        this.controlsService.updateBodyPosition();
    }

    alignNavLeft(event: Event) {
        this.header.element.style.textAlign = 'left';
    }

    alignNavRight(event: Event) {
        this.header.element.style.textAlign = 'right';
    }

    alignNavCenter(event: Event) {
        this.header.element.style.textAlign = 'center';
    }
}

export enum HeaderSizeDefine {
    small = 40,
    normal = 64,
    large = 80
}
