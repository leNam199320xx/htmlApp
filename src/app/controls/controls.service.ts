import { Injectable } from '@angular/core';
import { GridModel } from '../content/grid/grid.component';
import { HeaderControlsModel } from './header/header.component';
import { MainControlsModel } from './main/main.component';
import { FooterControlsModel } from './footer/footer.component';

@Injectable()
export class ControlsService {
    header: HeaderControlsModel;
    main: MainControlsModel;
    footer: FooterControlsModel;
    mainGrid: GridModel;
    constructor() {

    }
    setHeader(_h: HeaderControlsModel) {
        this.header = _h;
    }

    setMain(_m: MainControlsModel) {
        this.main = _m;
    }

    setFooter(_f: FooterControlsModel) {
        this.footer = _f;
    }
}
