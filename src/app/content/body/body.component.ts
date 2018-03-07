import { Component, Inject, ViewContainerRef } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';

@Component({
    selector: 'app-content-dynamic-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss']
})

export class BodyContentComponent {
    headerSelect = '';
    constructor() {
    }
    changeHeaderHeight() {
        this.headerSelect = (<HTMLDivElement>event.target).className.split('_')[1];
    }
}
