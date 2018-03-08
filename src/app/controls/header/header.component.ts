import { Component } from '@angular/core';
import { ControlsService } from '../controls.service';
@Component({
    selector: 'app-controls-header',
    templateUrl: 'header.html',
    styleUrls: ['header.scss']
})


export class HeaderControlsComponent {

    constructor(private controlsService: ControlsService) {

    }


    selectHeader(event: Event) {
    }

}

export interface HeaderControlsModel {
    id: number;
}
