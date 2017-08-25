import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    loadState = 'loading';

    onFinish() {
        this.loadState = 'finish';
    }
}
