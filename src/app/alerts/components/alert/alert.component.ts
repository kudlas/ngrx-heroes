import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {AlertsService} from '../../services/alerts.service';
import {delay} from 'rxjs/operators';
import {alertDelay} from '../../alerts.constants';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

    onDelete$ = new Subject();
    alerts: string[] = [];

    constructor(private service: AlertsService) {
    }

    ngOnInit() {

        this.service.onAlert$.subscribe((val: string) => {
            this.alerts.push(val);
            this.onDelete$.next( this.alerts.length - 1 );
        });

        this.onDelete$.pipe(
            delay(alertDelay)
            ).subscribe( (val: number) => {
                // console.log("subskrajb",val);
                this.closeAlert(val);
        });
    }

    closeAlert(id: number): void {
        this.alerts.splice(id, 1);
    }

}
