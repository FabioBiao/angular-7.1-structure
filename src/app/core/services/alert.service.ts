import { Injectable } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Alert, AlertType } from '../models/alert';

@Injectable({
    providedIn: 'root'
})

export class AlertService {

    private subject = new Subject<Alert>();
    private keepAfterRouteChange = false;

    constructor(private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    this.keepAfterRouteChange = false;
                } else {
                    this.clear();
                }
            }
        });
    }
    getAlerts(): Observable<any> {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = true): void {
        this.alerts(AlertType.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = true): void {
        this.alerts(AlertType.Error, message, keepAfterRouteChange);
    }
    info(message: string, keepAfterRouteChange = true): void {
        this.alerts(AlertType.Info, message, keepAfterRouteChange);
    }
    warn(message: string, keepAfterRouteChange = true): void {
        this.alerts( AlertType.Warning, message, keepAfterRouteChange);
    }
    alerts(alarmtype: AlertType, message: string, keepAfterRouteChange = true): void {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next(<Alert>{ type: alarmtype, message: message, keepAfterRouteChange: true });
    }
    clear() {
        this.subject.next();
    }
}
