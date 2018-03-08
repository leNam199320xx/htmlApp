import { Component } from '@angular/core';
@Component({
    selector: 'app-content-dynamic-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonContentComponent {
    private title = '';
    constructor() {
        this.title = 'default';
    }

    changeTitle(_title: string) {
        this.title = _title;
    }

    excute(event: Event) {

    }
}
