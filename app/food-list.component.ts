import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <select (change)="filterChanged($event.target.value)">
      <option value="showAll" selected="selected">Show all meals</option>
      <option value="highCal">Show high calorie foods (above 400)</option>
      <option value="lowCal">Show low calorie foods (below 400)</option>
    </select>
    <br>
    <br>
    <div *ngFor="let currentMeal of childComponentMeal | calories:selectedCalories"><p id="foodname"><span id="name">Name:</span> {{ currentMeal.foodname }}</p> <p id="fooddescription"><span id="description">Description:</span> {{ currentMeal.description }}</p> <p id="foodcalories"><span id="calories">Calorie Count:</span> {{ currentMeal.calories }}</p><br>
      <button class="btn btn-success" (click)="buttonClicked(currentMeal)">Change</button><br>
    </div>
    `
})

export class FoodListComponent {
  @Input() childComponentMeal: Food[];
  @Output() clickSender = new EventEmitter();
  public selectedCalories: string = "showAll";
  filterChanged(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
  }
  buttonClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
