import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal and Calorie Tracker:</h1>
    <hr>
    <food-list
    [childComponentMeal]="parentFoodList"
    (clickSender)="displayDetails($event)"
    ></food-list>
    <edit-food
    [childSelectedFood]="selectedMeal"
    (doneEditingSender)="finishedEditing()"
    ></edit-food>
    <new-food
      (addMealContentsSender)="addFood($event)"
    ></new-food>
  </div>
  `
})

export class AppComponent {
  public parentFoodList: Food[] = [
    new Food("Lean Pocket: Philly Cheesesteak", "One Philly Cheesesteak lean pocket", 250),
    new Food("12 shrimp", "Delicious shrimp that fill me with ecstasy", 300),
  ];
  selectedMeal: Food = null;
  displayDetails(clickedFood: Food) {
    this.selectedMeal = clickedFood;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addFood(newMealFromChild: Food) {
    this.parentFoodList.push(newMealFromChild);
  }
}
