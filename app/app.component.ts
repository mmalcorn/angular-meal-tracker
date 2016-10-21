import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal and Calorie Tracker:</h1>
    <br><hr>
    <h3 *ngFor="let currentMeal of meal"><p>Name: {{ currentMeal.foodname }}</p> <p>Description: {{ currentMeal.description }}</p> <p>Calorie Count: {{ currentMeal.calories }}</p><br>
    </h3>
  </div>
  `
})

export class AppComponent {
  public meal: Food[] = [
     new Food("Lean Pocket: Philly Cheesesteak", "One Philly Cheesesteak lean pocket", 250, 1),
     new Food("12 shrimp", "Delicious shrimp that fill me with ecstasy", 300, 2)
  ];
}

export class Food {
  constructor(public foodname: string, public description: string, public calories: number, public id: number) {

  }
}
