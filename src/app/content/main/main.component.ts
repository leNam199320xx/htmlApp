import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { GridModel } from '../grid/grid.component';

@Component({
    selector: 'app-content-dynamic-main',
    templateUrl: 'main.html'
})

export class MainContentComponent implements OnInit {
    @ViewChild('Grid') GridRef: ElementRef; // this is a component
    grid: GridModel;
    constructor() {
    }

    ngOnInit() {
        this.grid = (<any>this.GridRef).grid;
        this.grid.row = 10;
        this.grid.column = 10;
    }
}
