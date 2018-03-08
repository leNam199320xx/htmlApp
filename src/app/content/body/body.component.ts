import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';

@Component({
    selector: 'app-content-dynamic-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss']
})

export class BodyContentComponent implements OnInit {
    @ViewChild('Header') Header: ElementRef;
    @ViewChild('Main') Main: ElementRef;
    @ViewChild('Footer') Footer: ElementRef;

    ngOnInit() {
    }
}
