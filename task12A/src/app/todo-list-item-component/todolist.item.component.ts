import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'todo-list-item',
    templateUrl: 'todolist.item.component.html',
    styleUrls: ['todolist.item.component.style.css']
})
export class ToDoListItemComponent {
    @Input() toDoAction: string;
    @Input() index: number;
    @Output() onRemove: EventEmitter<number> = new EventEmitter();

    constructor() {
    }
    public deleteItem() {
        this.onRemove.emit(this.index);
    }
}