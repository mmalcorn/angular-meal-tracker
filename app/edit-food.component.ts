import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
      <div *ngIf="childSelectedFood">
      <div class="modal-container">
        <div class="form-group" id="edit-meal">
        <h2>Edit Meal</h2>
          <label>Food:</label>
          <input class="form-control" [(ngModel)]="childSelectedFood.foodname">

          <label>Details</label>
          <input class="form-control" [(ngModel)]="childSelectedFood.description">

          <label>Calories:</label>
          <input class="form-control" [(ngModel)]="childSelectedFood.calories">

          <button class="btn btn-warning" (click)="doneEditing()" id="edit-button">Done</button>
      </div>
        </div>
      </div>
  `
})

export class EditFoodListComponent {
  @Input() childSelectedFood: Food;
  @Output() doneEditingSender = new EventEmitter();
  doneEditing() {
    this.doneEditingSender.emit();
  }
}
