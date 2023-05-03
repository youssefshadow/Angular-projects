import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodolistComponent {
  @Input() title: string = 'Ma liste des utilisateur';
  items: string[] = [];

  addItem(item: string): void {
    if (item.trim() !== '') {
      this.items.push(item);
    }
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}
