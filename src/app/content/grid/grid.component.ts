import { Component } from '@angular/core';
@Component({
    selector: 'app-content-dynamic-grid',
    templateUrl: 'grid.html',
    styles: ['grid.scss']
})
export class GridContentComponent {
    gridDefault: GridModel = {
        row: 0,
        column: 0,
        padding: '5px',
        margin: '4px',
        background: 'blue'
    };

    grid: GridModel;

    constructor() {
        this.grid = this.gridDefault;
        this.grid.column = 2;
        this.grid.row = 1;
    }

    setGrid(grid: GridModel) {
        this.grid = grid;
    }
}

export interface GridModel {
    column: number;
    row: number;
    padding: string;
    margin: string;
    background: string;
}

export enum GridDefine {
}
