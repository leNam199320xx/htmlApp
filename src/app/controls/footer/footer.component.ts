import { Component } from '@angular/core';

@Component({
    selector: 'app-controls-footer',
    templateUrl: 'footer.html',
    styleUrls: ['footer.scss']
})


export class FooterControlsComponent {
    constructor() {

    }
}

export interface FooterControlsModel {
    id: number;
}
