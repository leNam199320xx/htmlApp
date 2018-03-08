import { Component, Inject } from '@angular/core';
@Component({
    selector: 'app-content-dynamic-header',
    templateUrl: 'header.html',
    styleUrls: ['header.html']
})

export class HeaderContentComponent {
    defaultHeader: Header = {
        height: 10,
        fontSize: 10,
        align: 'center',
        numberOfItems: 4
    };
    currentHeader: Header;
    constructor() {
        this.currentHeader = this.defaultHeader;
    }
    changeHeader(_header: Header) {
        this.currentHeader = _header;
    }
}

export interface Header {
    height: number;
    fontSize: number;
    align: string;
    numberOfItems: number;
}
