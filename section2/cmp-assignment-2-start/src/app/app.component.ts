import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    rootItems: string[] = ['Apples', 'Bananas', 'Cherries'];
    onNewItem(newItem) {
        this.rootItems.push(newItem);
        console.log(this.rootItems);
    }
}
