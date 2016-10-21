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
    ></food-list>
  </div>
  `
})

export class AppComponent {
  public parentFoodList: Food[] = [
    new Food("Lean Pocket: Philly Cheesesteak", "One Philly Cheesesteak lean pocket", 250, 1),
    new Food("12 shrimp", "Delicious shrimp that fill me with ecstasy", 300, 2),
  ];


  buttonClicked() {
    alert("working");
  }
}
