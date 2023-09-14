import { ButtonAddComponent } from "./button-add/button-add.component";
import { CounterComponent } from "./counter.component";
import { ButtonRemoveComponent } from "./button-remove/button-remove.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations : [     
    CounterComponent,
    ButtonAddComponent,
    ButtonRemoveComponent,
    NavbarComponent ],
  imports : [CommonModule, MatButtonModule, MatToolbarModule],
  exports : [CounterComponent]

})
export class counterModule {

} 