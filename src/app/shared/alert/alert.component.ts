import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../core/services/alert.service';
import { Alert } from '../../core/models/alert';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit {
    alerts: Alert[] = [];
    constructor(private alertService: AlertService) { }

    // ngOnInit() {
    // }
    ngOnInit(): void {
        this.alertService.getAlerts().subscribe((alert: Alert) => {
            if (!alert) {
                this.alerts = [];
                return;
            }
            this.alerts.push(alert);
            setTimeout(() => this.removeAlert(alert), 5000);
        });
    }

    removeAlert(alert: Alert): void {
        this.alerts = this.alerts.filter(x => x !== alert);
    }

}
