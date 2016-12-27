import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <div class="form-group" id="add-meal-form">
        <h3>Add a meal</h3>
      <label>Food Name:</label>
      <input class="form-control" #foodName>
      <label>Enter a description for your meal:</label>
      <input class="form-control" #foodDescription>
      <label>Total caloric intake:</label>
      <input class="form-control" #foodCalories>
      <button class="btn btn-warning" id="add-food-button" (click)="addNewMealContents(foodName.value, foodDescription.value, foodCalories.value);
        foodName.value='';
        foodDescription.value='';
        foodCalories.value='';">Add +</button>
  </div>
      <br><br>
  `
})

export class NewFoodComponent {
  @Output() addMealContentsSender = new EventEmitter();
  addNewMealContents(foodname: string, description: string, calories: number) {
    var newMealToAdd: Food = new Food(foodname, description, calories);
    this.addMealContentsSender.emit(newMealToAdd);
  }
}
