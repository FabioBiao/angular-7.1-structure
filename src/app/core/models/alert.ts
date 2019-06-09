export class Alert {
    type: AlertType;
    message: string;
    // alertId: string;
    keepAfterRouteChange: boolean;

    constructor(init?: Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success = 'alert-success',
    Error = 'alert-danger',
    Info = 'alert-info',
    Warning = 'alert-warning'
}
