import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <h3 *ngFor="let currentMeal of childComponentMeal"><p>Name: {{ currentMeal.foodname }}</p> <p>Description: {{ currentMeal.description }}</p> <p>Calorie Count: {{ currentMeal.calories }}</p><br><br></h3>
    <button class="btn btn-success" (click)="buttonClicked(food)">Change</button><br>
  `
})

export class FoodListComponent {
  @Input() childComponentMeal: Food[];
  @Output() clickSender = new EventEmitter();
  buttonClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
