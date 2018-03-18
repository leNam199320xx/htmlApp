import { Injectable, ElementRef } from '@angular/core';
import { GridModel } from '../content/grid/grid.component';
import { MainControlsModel } from './main/main.component';
import { FooterControlsModel } from './footer/footer.component';
import { StylesModel } from '../models/StylesModel';
import { WindowService } from '../../services/window.service';

@Injectable()
export class ControlsService {
    header: ItemControl = new ItemControl();
    body: ItemControl = new ItemControl();
    footer: ItemControl = new ItemControl();
    popup: ItemControl = new ItemControl();
    constructor(private windowService: WindowService) {
    }
    updateBodyPosition() {
        this.body.element.style.marginTop = this.header.element.style.height;
    }
    headerFixed(_fixed: boolean) {
        if (_fixed) {
            this.header.element.style.position = 'absolute';
            this.header.element.style.top = '0';
        }
        this.header.element.style.width = '100%';
    }
}


export class ItemControl {
    id = '';
    title = '';
    type = 'div';
    element: HTMLElement = document.createElement('div');
    childs: ItemControl[] = [];
    count = 0;

    constructor() {
    }

    reset(_type: string) {
        this.type = _type;
        this.element = document.createElement(this.type);
        this.element.id = this.id;
        this.element.title = this.title;
    }


    position(_p: string) {
        this.element.style.position = _p;
    }

    changeSize(_w: string, _h: string) {
        this.element.style.width = _w;
        this.element.style.height = _h;
    }

    changeFontSize(_fs: string) {
        this.element.style.fontSize = _fs;
    }

    changeColor(_color: string) {
        this.element.style.color = _color;
    }

    changeBackground(_back: string) {
        this.element.style.background = _back;
    }

    changeBorder(_size: string, _rad: string, _style: string) {
        this.element.style.borderStyle = _style;
        this.element.style.borderRadius = _rad;
        this.element.style.borderWidth = _size;
    }

    addChild() {
        const child = new ItemControl();
        this.childs.push(child);
        this.element.appendChild(child.element);
        this.count++;
        return child;
    }
    removeAll() {
        while (this.count > 0) {
            this.removeChild(0);
        }
    }
    removeChild(_index) {
        if (_index >= 0 && _index < this.count) {
            this.childs[_index].element.parentElement.removeChild(this.childs[_index].element);
            this.childs.splice(_index, 1);
            this.count--;
        }
    }
}
