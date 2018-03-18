import { Component, OnDestroy, Directive, ViewContainerRef, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService } from '../../services/loader.service';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[content]' })
export class ContentDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}


@Component({
    selector: 'app-content',
    templateUrl: 'content.html',
    styleUrls: ['content.scss']
})
export class ContentComponent implements OnDestroy, AfterViewInit {
    title = '';
    private subscription: Subscription;

    @ViewChild(ContentDirective) content: ContentDirective;

    constructor(
        public loaderService: LoaderService,
        private commonService: CommonService) {
        this.subscription = commonService.noti.subscribe(data => {
            const _data = data.toString();
            this.title = _data;
        });
    }

    ngAfterViewInit() {
        this.loaderService.rootViewContainer = this.content.viewContainerRef;
        this.loaderService.addBodyComponent();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
