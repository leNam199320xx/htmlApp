import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { StylesModel } from '../app/models/StylesModel';

@Injectable()
export class WindowService implements OnDestroy {
    currentBreakpoint: Breakpoints;

    body = <HTMLBodyElement>document.body;
    header = <HTMLHeadElement>document.head;
    headerModel: StylesModel;
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
    createStyle(_model: StylesModel) {
        const newStyleTag = <HTMLStyleElement>document.createElement('style');
        for (let j = 0; j < _model.class.styles.length; j++) {
        }
        const st: HTMLStyleElement = {} as any;
        console.log(st);
        st.style.backgroundColor = 'red';
        st.style.color = 'blue';
        const stringClass = _model.class.name + '{' + + '}';

        newStyleTag.innerHTML = stringClass;
        newStyleTag.type = 'text/css';
        this.header.appendChild(newStyleTag);
    }
    createScript() {

    }

    saveFile(_text: string, _filename: string, _ext: string, _haveJs: boolean, _haveCss: boolean) {
        if (_ext === ExtFile.HTML) {
            _text = this.configHtmlFile(_text,
                _haveJs ? this.configJsFile(_filename) + '.' + ExtFile.JS : '',
                _haveCss ? this.configCssFile(_filename) + '.' + ExtFile.CSS : '');
        }
        const link = document.createElement('a');
        const data = new Blob([_text], { type: 'text/plain' });
        const file = window.URL.createObjectURL(data);
        link.href = file;
        link.download = _filename + '.' + _ext;
        return link;
    }

    configHtmlFile(dataFile: string, scriptFile: string, styleFile: string) {
        const metaUTF8 = '<meta charset="utf-8" />';
        const metaViewbox = '<meta name="viewport" content="width=device-width, initial-scale=1">';
        const head = '<head>' + metaUTF8 + metaViewbox + styleFile + '</head>';
        const body = '<body>' + dataFile + scriptFile + '</body>';
        const html = '<!DOCTYPE HTML><html>' + head + body + '</html>';

        return html;
    }

    configJsFile(link: string) {
        return '<script src="' + link + '"></script>';
    }

    configCssFile(link: string) {
        return '<link rel="stylesheet" href="' + link + '">';
    }
}

export interface Breakpoints {
    device: string;
    query: string;
    value: number;
}


export enum ExtFile {
    HTML = 'html',
    JS = 'js',
    CSS = 'css'
}
