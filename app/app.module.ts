import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { FoodListComponent } from './food-list.component';
import { EditFoodListComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FoodListComponent,
    EditFoodListComponent,
    NewFoodComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
