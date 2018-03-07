import { Component, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
@Injectable()
export class CommonService {
    private notiSource = new Subject<string>();
    private json: JSON;
    private data: any;
    noti = this.notiSource.asObservable();
    constructor(private http: HttpClient) {
        const data = this.getJsonData('assets/data-grid.json');
    }
    showNoti(_noti: string) {
        this.notiSource.next(_noti);
    }
    getJsonData(filePath: string): Subscription {
        return this.http.get(filePath).subscribe(m => {
            console.log(m);
        });
    }
}
