import { Component } from '@angular/core';
import { ToDoListService } from './../todolist.service';

@Component({
    selector: 'todo-list',
    templateUrl: 'todolist.component.html',
    styleUrls: ['todolist.component.style.css'],
    providers: [ToDoListService]
})
export class ToDoListComponent {
    items: string[];
    taskDescription: string;

    constructor(private listService: ToDoListService) {
        this.taskDescription = this.listService.taskDescription;
    }
    public getItems(): void {
        this.items = this.listService.getItems();
    }
    ngOnInit() {
        this.getItems();
    }
    public addItem() {
        this.listService.addItem(String(this.taskDescription));
        this.getItems();
    }
    public removeItem(index: number) {
        this.listService.removeItem(index);
        this.getItems();
    }
    public clearItems() {
        this.listService.clearItems();
        this.getItems();
    }
}