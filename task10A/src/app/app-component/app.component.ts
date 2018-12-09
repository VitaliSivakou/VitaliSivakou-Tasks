import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.style.css']
})
export class AppComponent {
    public greeting: string;

    constructor() {
        this.greeting = 'Hello world!';
    }
}