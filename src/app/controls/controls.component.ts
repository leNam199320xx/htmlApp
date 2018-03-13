import { Component, ViewChild, ElementRef, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService } from '../../services/loader.service';
import { GridModel } from '../content/grid/grid.component';
import { ControlsService } from './controls.service';
import { WindowService, ExtFile } from '../../services/window.service';

@Component({
    selector: 'app-controls',
    templateUrl: 'controls.html'
})
export class ControlsComponent implements OnInit {
    // @ViewChild('btnDefineGrid') btnDefineGrid: ElementRef;
    private _btnDefineGrid: HTMLDivElement;
    private subscription: Subscription;
    // isGridsBox = false;
    layouSelected = 0;
    gridSelected = 0;
    bodyShowing = false;
    layout = Layout;
    templateOptions: any[] = [
        { text: 'temp 1', value: '1' },
        { text: 'temp 2', value: '2' },
        { text: 'temp 3', value: '3' },
        { text: 'temp 4', value: '4' }
    ];
    layourOptions: any[] = [
        { value: '0', text: 'Header' },
        { value: '1', text: 'Main' },
        { value: '2', text: 'Footer' }
    ];
    constructor(
        private commonService: CommonService,
        private controlsService: ControlsService,
        private windowService: WindowService,
        @Inject(LoaderService) public loaderService: LoaderService,
        @Inject(ViewContainerRef) public viewContainerRef: ViewContainerRef
    ) {
        this.loaderService.rootViewContainer = this.viewContainerRef;
    }

    ngOnInit() {
    }

    openGridsBox() {
    }

    selectContent(event: Event) {
        this.gridSelected = parseInt((<HTMLSelectElement>event.target).value, 10);
        const data = 'page ' + this.gridSelected + ' selected';
        if (!this.loaderService.bodyComponent) {
            this.commonService.showNoti(data);
            this.loaderService.addBodyComponent();
        }
        this.bodyShowing = true;
    }

    selectControlsForLayout(event: Event) {
        const value = parseInt((<HTMLSelectElement>event.target).value, 10);
        this.layouSelected = value;

        if (value === Layout.Header) {
        } else if (value === Layout.Main) {
            this.controlsService.mainGrid = (<any>this.loaderService.bodyComponent.Main).grid;
        } else if (value === Layout.Footer) {
        }
    }

    clear() {
        this.loaderService.clearComponent();
    }

    downloadFile(event: Event) {
        const file1 = this.windowService.saveFile('function hello() {}', 'nam', ExtFile.JS, false, false);
        const file2 = this.windowService.saveFile('body {}', 'nam', ExtFile.CSS, false, false);
        const file3 = this.windowService.saveFile('<div>xin chào các bạn</div>', 'nam', ExtFile.HTML, true, true);
        file1.click();
        file2.click();
        file3.click();
    }
}


export enum Layout {
    Header = 0,
    Main = 1,
    Footer = 2
}
