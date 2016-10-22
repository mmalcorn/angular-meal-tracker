import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `

  <div *ngIf="childSelectedFood">
    <h2>Edit Meal</h2>
    <div class="form-group">
      <label>Food:
      <input class="form-control" [(ngModel)]="childSelectedFood.foodname">
      </label>
    </div>

    <div class="form-group">
      <label>Description</label>
      <input class="form-control" [(ngModel)]="childSelectedFood.description">
    </div>

    <div class="form-group">
      <label>Calories:
      <input class="form-control" [(ngModel)]="childSelectedFood.calories">
      </label>
      <button class="btn btn-warning" (click)="doneEditing()">Done</button>
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
