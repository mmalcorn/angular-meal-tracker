import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "calories",
  pure: true
})
export class FoodPipe implements PipeTransform {
  transform(input: Food[], args) {
    var output: Food[] = [];
    for (var i = 0; i < input.length; i++) {
      
    }
    return input;
  }
}
