import { HostListener, Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class WindowService implements OnDestroy {
    currentBreakpoint: Breakpoints;
    body = <HTMLBodyElement>document.body;
    header = <HTMLHeadElement>document.head;
    styleDefine = <HTMLStyleElement>document.createElement('style');
    classesDefine: ClassDefine[] = [];
    breakpoints: Breakpoints[] = [
        {
            query: '(min-width: 1280px)',
            device: 'desktop',
            value: 0
        },
        {
            query: '(min-width: 960px) and (max-width: 1289px) and (orientation:landscape)',
            device: 'tablet landscape',
            value: 1
        },
        {
            query: '(min-width: 600px) and (max-width: 839px)',
            device: 'tablet',
            value: 2
        },
        {
            query: '(min-width: 480px) and (max-width: 959px) and (orientation:landscape)',
            device: 'mobile landscape',
            value: 3
        },
        {
            query: '(min-width: 0px) and (max-width: 599px)',
            device: 'mobile',
            value: 4
        },
    ];
    constructor() {
        this.setBreakpoint();
        this.createStyle([
            {
                name: '.name1',
                attributes: [
                    {
                        name: 'background-color',
                        value: 'black'
                    }
                ]
            }
        ]);
    }
    matchMedia(_mediaquery) {
        const result = <MediaQueryList>window.matchMedia(_mediaquery);
        return result;
    }
    ngOnDestroy() {
    }
    setBreakpoint() {
        this.breakpoints.forEach(b => {
            const r = this.matchMedia(b.query);
            if (r.matches) {
                this.currentBreakpoint = b;
                this.body.className = b.device;
            }
        });
    }
    createStyle(_classNames: ClassDefine[]) {
        let classesFull = '';
        for (let i = 0; i < _classNames.length; i++) {
            let nameForClass = '';
            let attributesForClass = '';
            this.classesDefine.push({
                name: _classNames[i].name,
                attributes: _classNames[i].attributes
            });

            for (let j = 0; j < _classNames[i].attributes.length; j++) {
                attributesForClass += _classNames[i].attributes[j].name + ': ' + _classNames[i].attributes[j].value + ';';
            }
            nameForClass = _classNames[i].name + '{' + attributesForClass + '}';
            classesFull += nameForClass;
        }
        this.styleDefine.innerHTML = classesFull;
        this.styleDefine.type = 'text/css';
        this.header.appendChild(this.styleDefine);
    }
    createScript() {

    }
}

export interface Breakpoints {
    device: string;
    query: string;
    value: number;
}

export interface ClassDefine {
    name: string;
    attributes: ClassAttribute[];
}

export interface ClassAttribute {
    name: string;
    value: string;
}
