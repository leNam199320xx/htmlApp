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
    private _btnDefineGrid: HTMLDivElement;
    private subscription: Subscription;
    @ViewChild('selectTemplate') selectTemplate: ElementRef;
    layouSelected = -1;
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
    ) { }

    ngOnInit() {
    }

    openGridsBox() {
    }

    selectContent() {
        this.loaderService.addBodyComponent();
    }


    selectControlsForLayout(event: Event) {
        this.layouSelected = parseInt((<HTMLSelectElement>event.target).value, 10);
    }

    clear() {
        this.loaderService.clearComponent();
    }

    downloadFile(event: Event) { }
}


export enum Layout {
    Header = 0,
    Main = 1,
    Footer = 2
}
