import { Component } from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: 'todolist.component.html',
    styleUrls: ['todolist.component.style.css']
})
export class ToDoListComponent {
    public items: string[];
    public taskDescription: string;

    constructor() {
        this.items = [];
        this.taskDescription = "Текст памятки";
    }
    public addItem() {
        this.items.push(String(this.taskDescription));
    }
    public removeItem(index: number) {
        this.items.splice(index, 1);
    }
    public clearItems() {
        this.items.length = 0;
    }
}