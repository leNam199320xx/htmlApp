import { Component } from '@angular/core';
import { GridModel } from '../../content/grid/grid.component';
import { ControlsService } from '../controls.service';

@Component({
    selector: 'app-controls-main',
    templateUrl: 'main.html',
    styleUrls: ['main.scss']
})


export class MainControlsComponent {
    grid: GridModel;

    constructor(private controlsService: ControlsService) {
        if (this.controlsService) {
            this.grid = this.controlsService.mainGrid;
        }
    }

    setGrid(_grid: GridModel) {
        this.grid = _grid;
    }

    selectRow(event: Event) {
        if (this.grid) {
            this.grid.row = parseInt((<HTMLSelectElement>event.target).value, 10);
        }
    }

    selectColumn(event: Event) {
        if (this.grid) {
            this.grid.column = parseInt((<HTMLSelectElement>event.target).value, 10);
        }
    }
}


export interface MainControlsModel {
    id: number;
}
