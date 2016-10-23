import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "calories",
  pure: false
})
export class FoodPipe implements PipeTransform {
  transform(input: Food[]) {
    var output: Food[] = [];
    if (calorieTotal === "highCal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 400) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (calorieTotal === "lowCal") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].calories <= 400) {
        output.push(input[i]);
      }
    }
      return output;
    } else {
    return input;
      }
    }
  }
