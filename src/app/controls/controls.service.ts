import { Injectable, ElementRef } from '@angular/core';
import { GridModel } from '../content/grid/grid.component';
import { MainControlsModel } from './main/main.component';
import { FooterControlsModel } from './footer/footer.component';
import { HeaderModel } from '../models/HeaderModel';

@Injectable()
export class ControlsService {
    header: HeaderModel;
    headerCreated = false;
    mainGrid: GridModel;
    constructor() {

    }
}
