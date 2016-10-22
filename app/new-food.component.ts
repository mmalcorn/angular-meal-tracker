import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <div class="row">
    <h1>Add food items:</h1>
    <div>
      <label>Enter Food Name:</label>
      <input #foodName>
    </div>

    <div>
      <label>Enter a description for your meal:</label>
      <input #foodDescription>
    </div>

    <div>
      <label>Enter total caloric intake:</label>
      <input #foodCalories>
      <br><br>
      <button class="btn btn-warning" (click)="addNewMealContents(foodName.value, foodDescription.value, foodCalories.value)">Add</button>
    </div>
  </div>
  `
})

export class NewFoodComponent {
  @Output() addMealContentsSender = new EventEmitter();
  addNewMealContents(foodname: string, description: string, calories: number) {
    var newMealToAdd: Food = new Food(foodname, description, calories);
    this.addMealContentsSender.emit(newMealToAdd);
  }
}
