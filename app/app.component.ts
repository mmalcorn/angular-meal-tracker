import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="main-nav">
      <header>
      <img src="https://media.freepik.com/accounts/img/badges/favorites_gold.svg" alt="Random Images" class="imgs">
      Meal & Calorie Tracker
      </header>
  </div>

  <div class="container">
      <div class="row">
          <div class="col-xs-6">
              <food-list
              [childComponentMeal]="parentFoodList"
              (clickSender)="displayDetails($event)"
              ></food-list>
          </div>
          <div class="col-xs-6">
            <new-food
            (addMealContentsSender)="addFood($event)"
            ></new-food>
            <edit-food
            [childSelectedFood]="selectedMeal"
            (doneEditingSender)="finishedEditing()"
            ></edit-food>
            </div>
      </div>
  </div>
  `
})

export class AppComponent {
  public parentFoodList: Food[] = [];
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
