import {Injectable} from '@angular/core';

@Injectable()
export class ToDoListService{    
    private items: string[];
    public taskDescription: string;

    constructor() {
        this.items = [];
        this.taskDescription = "Текст памятки";
    }
    public getItems() {
        return this.items;
    }    
    public addItem(item: string) {
        this.items.push(item);
    }
    public removeItem(index: number) {
        this.items.splice(index, 1);
    }
    public clearItems() {
        this.items.length = 0;
    }
}