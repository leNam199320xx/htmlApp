import { Component } from '@angular/core';
import { ControlsService } from '../controls.service';

@Component({
    selector: 'app-controls-footer',
    templateUrl: 'footer.html',
    styleUrls: ['footer.scss']
})


export class FooterControlsComponent {
    constructor(private controlsService: ControlsService) {

    }
}

export interface FooterControlsModel {
    id: number;
}
