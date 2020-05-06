import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../../../core/services/cocktails.service';
import { Cocktail } from '../../models/cocktail.model';

@Component({
  selector: 'app-list-cocktails',
  templateUrl: './list-cocktails.component.html',
  styleUrls: ['./list-cocktails.component.scss'],
  providers: [CocktailsService],
})
export class ListCocktailsComponent implements OnInit {
  constructor(private cocktailsService: CocktailsService) {}
  types = ['cocteles', 'categories', 'glasses', 'ingredients', 'alcoholic'];
  typeSearch = this.types[0];
  keywordTypeSearch = 'strDrink';
  data: Array<Cocktail> = [];
  detailCocktail = [];

  selectEvent(item: Cocktail): void {
    if (this.typeSearch !== 'cocteles') {
      this.fetchGetFilterType(
        this.identifiedType(this.typeSearch),
        item[this.keywordTypeSearch].replace(' ', '_')
      );
    } else {
      this.fetchDetailCocktail(item.idDrink);
    }
  }

  identifiedType(type: string): string {
    switch (type) {
      case 'categories':
        this.keywordTypeSearch = 'strCategory';
        return 'c';
      case 'glasses':
        this.keywordTypeSearch = 'strGlass';
        return 'g';
      case 'ingredients':
        this.keywordTypeSearch = 'strIngredient1';
        return 'i';
      case 'alcoholic':
        this.keywordTypeSearch = 'strAlcoholic';
        return 'a';
    }
  }

  onChangeSearch(val: string): void {
    if (this.typeSearch !== 'cocteles') {
      this.fetchSearchType(this.identifiedType(this.typeSearch));
    } else {
      this.fetchCocktails(val);
    }
    if (!val) {
      this.clearData();
    }
  }
  onFocused(e): void {
    if (this.typeSearch !== 'cocteles') {
      this.fetchSearchType(this.identifiedType(this.typeSearch));
    } else {
      this.fetchCocktails('');
    }
  }
  ngOnInit(): void {}

  inputCleared(e): void {
    this.clearData();
  }

  clearData(): void {
    this.detailCocktail = [];
  }
  fetchCocktails(nameDrink: string): void {
    this.cocktailsService.getAllCocktails(nameDrink).subscribe((item) => {
      console.log(item, 'item');
      this.data = item.drinks;
    });
  }

  fetchDetailCocktail(idDrink: string): void {
    this.cocktailsService.getDetailCocktail(idDrink).subscribe((item) => {
      this.detailCocktail = item.drinks;
    });
  }

  fetchSearchType(type: string): void {
    this.cocktailsService.getSearchType(type).subscribe((item) => {
      this.data = item.drinks;
    });
  }
  fetchGetFilterType(type: string, name: string): void {
    this.cocktailsService.getFilterType(type, name).subscribe((item) => {
      this.detailCocktail = item.drinks;
    });
  }
}
