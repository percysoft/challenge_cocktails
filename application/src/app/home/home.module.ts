import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { HomeRoutingModule } from './home-routing.module';
import { ListCocktailsComponent } from './components/list-cocktails/list-cocktails.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CokctailComponent } from './components/cocktail/cokctail.component';

@NgModule({
  declarations: [ListCocktailsComponent, CokctailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    AutocompleteLibModule,
    FormsModule,
  ],
})
export class HomeModule {}
