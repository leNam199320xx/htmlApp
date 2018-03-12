import { Component, Output, Input, EventEmitter } from '@angular/core';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nam-area',
    templateUrl: 'nam-area.html'
})

export class NamAreaComponent {
    @Input('disabled') disabled: boolean;
}
