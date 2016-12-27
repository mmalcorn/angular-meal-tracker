import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <div class="pipe">
        <select (change)="filterChanged($event.target.value)">
          <option value="showAll" selected="selected">Show all meals</option>
          <option value="highCal">Show high calorie foods (above 400)</option>
          <option value="lowCal">Show low calorie foods (below 400)</option>
        </select>
    </div>

    <br>

    <div *ngFor="let currentMeal of childComponentMeal | calories:selectedCalories">
        <div class="new-food-display">
            <div id="foodname"><span id="name">Food:</span><p>{{ currentMeal.foodname }}</p></div>
            <div id="fooddescription"><span id="description">Description:</span> <p>{{ currentMeal.description }}</p></div>
            <div id="foodcalories"><span id="calories">Calorie Count:</span><p>{{ currentMeal.calories }}</p></div>
            <br>
          <button class="btn btn-xs" (click)="buttonClicked(currentMeal)">Edit</button><br>
      </div>
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
