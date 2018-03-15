import { Injectable, ElementRef } from '@angular/core';
import { GridModel } from '../content/grid/grid.component';
import { MainControlsModel } from './main/main.component';
import { FooterControlsModel } from './footer/footer.component';
import { StylesModel } from '../models/StylesModel';
import { WindowService } from '../../services/window.service';

@Injectable()
export class ControlsService {
    header: StylesModel = {
        id: 'header-content',
        element: null,
        class: {
            name: 'header-content',
            styles: null,
        }
    };
    constructor(private windowService: WindowService) {

    }
    update() {
        this.windowService.createStyle(this.header);
    }
}
