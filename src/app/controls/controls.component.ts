import { Component, ViewChild, ElementRef, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService } from '../../services/loader.service';

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
    @ViewChild('btnDefineGrid') btnDefineGrid: ElementRef;
    private _btnDefineGrid: HTMLDivElement;
    public gridSelected = 0;
    private subscription: Subscription;
    isGridsBox = false;
    bodyShowing = false;
    constructor(private commonService: CommonService,
        @Inject(LoaderService) public loaderService: LoaderService,
        @Inject(ViewContainerRef) public viewContainerRef: ViewContainerRef
    ) {
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
        this.loaderService.setRootViewContainerRef(this.viewContainerRef);
        this.loaderService.addBodyComponent();
        this.bodyShowing = true;
    }

    selectHeader(event: Event) {
    }

    clear() {
        this.loaderService.clearComponent();
    }
}
