import { Component, ViewChild, ElementRef, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService } from '../../services/loader.service';
import { GridModel } from '../content/grid/grid.component';
import { ControlsService } from './controls.service';

@Component({
    selector: 'app-controls',
    templateUrl: 'controls.html',
    styleUrls: ['controls.scss']
})
export class ControlsComponent implements OnInit {
    @ViewChild('btnDefineGrid') btnDefineGrid: ElementRef;
    private _btnDefineGrid: HTMLDivElement;
    private subscription: Subscription;
    isGridsBox = false;
    layouSelected = 0;
    gridSelected = 0;
    bodyShowing = false;
    layout = Layout;

    constructor(
        private commonService: CommonService,
        private controlsService: ControlsService,
        @Inject(LoaderService) public loaderService: LoaderService,
        @Inject(ViewContainerRef) public viewContainerRef: ViewContainerRef
    ) {
        this.loaderService.rootViewContainer = this.viewContainerRef;
    }

    ngOnInit() {
        this._btnDefineGrid = this.btnDefineGrid.nativeElement;
    }

    openGridsBox() {
        this.isGridsBox = !this.isGridsBox;
    }

    selectContent(event: Event) {
        this.loaderService.clearComponent();
        this.gridSelected = parseInt((<HTMLDivElement>event.target).className.split('_')[1], 10);
        const data = 'page ' + this.gridSelected + ' selected';
        this.commonService.showNoti(data);
        this.loaderService.addBodyComponent();
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
}


export enum Layout {
    Header = 0,
    Main = 1,
    Footer = 2
}
