import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailsService {
  constructor(private http: HttpClient) {}

  getAllCocktails(nameCocktail: string): Observable<any> {
    return this.http.get<any[]>(
      `${environment.url_api_cocktails}${nameCocktail}`
    );
  }

  getDetailCocktail(idCocktail: string): Observable<any> {
    return this.http.get<any[]>(
      `${environment.url_api_detail_cocktail}${idCocktail}`
    );
  }

  getSearchType(idType: string): Observable<any> {
    return this.http.get<any[]>(
      `${environment.url_api_search_types}${idType}=list`
    );
  }

  getFilterType(idType: string, nameType: string): Observable<any> {
    return this.http.get<any[]>(
      `${environment.url_api_filter_type}${idType}=${nameType}`
    );
  }
}
