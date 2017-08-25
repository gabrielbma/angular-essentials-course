import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    @Input() items: Array<string>;

    @Output() buttonClicked = new EventEmitter<string>();

    newItem;

    constructor() { }

    ngOnInit() {
    }

    onClick() {
        console.log(this.newItem);
        this.buttonClicked.emit(this.newItem);
    }

}
