import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app-component/app.component';
import { ToDoListComponent } from './todo-list-component/todolist.component';
import { ToDoListItemComponent } from './todo-list-item-component/todolist.item.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, ToDoListComponent, ToDoListItemComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }