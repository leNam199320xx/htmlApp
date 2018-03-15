import { Component, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NamSelectModel } from '../model/NamSelectModel';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nam-select',
    templateUrl: 'nam-select.html'
})

export class NamSelectComponent {
    @Output('click') click = new EventEmitter<any>();

    @Output('change') change = new EventEmitter<any>();

    @Input('disabled') disabled: boolean;

    @Input('value') value: string;

    @Input('namOptions') namOptions: NamSelectModel[];

    @ViewChild('select') select: ElementRef;
}
