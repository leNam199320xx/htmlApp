import { Component, Output, Input, EventEmitter } from '@angular/core';
import { NamSelectModel } from '../model/NamSelectModel';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nam-select',
    templateUrl: 'nam-select.html',
    styleUrls: ['nam-select.scss']
})

export class NamSelectComponent {
    @Output('click') click = new EventEmitter<any>();

    @Output('change') change = new EventEmitter<any>();

    @Input('disabled') disabled: boolean;

    @Input('value') value: string;

    @Input('namOptions') namOptions: NamSelectModel[];
}
