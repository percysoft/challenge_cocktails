import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCocktailsComponent } from './components/list-cocktails/list-cocktails.component';

const routes: Routes = [
  {
    path: '',
    component: ListCocktailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
