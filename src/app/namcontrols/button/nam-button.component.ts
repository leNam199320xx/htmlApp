import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nam-button',
    templateUrl: 'nam-button.html'

})

export class NamButtonComponent implements OnInit {
    @Output('click') click = new EventEmitter<any>();

    @Input('disabled') disabled: boolean;

    @Input('text') text: string;

    @Input('namClass') namClass: string;

    constructor() {
    }

    ngOnInit() {
    }
}
