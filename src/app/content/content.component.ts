import { Component, OnDestroy } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnDestroy {
    title = '';
    private subscription: Subscription;
    constructor(
        private commonService: CommonService) {
        this.subscription = commonService.noti.subscribe(data => {
            const _data = data.toString();
            this.title = _data;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
