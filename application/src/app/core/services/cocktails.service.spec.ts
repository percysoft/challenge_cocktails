import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CocktailsService } from './cocktails.service';
import { dataMock } from './dataMock';

fdescribe('CocktailsService', () => {
  let service: CocktailsService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CocktailsService],
    });
    injector = getTestBed();
    service = TestBed.inject(CocktailsService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUserList() should return data', () => {
    service.getAllCocktails('Dragonfly').subscribe((res) => {
      expect(res).toEqual(dataMock);
    });

    const req = httpMock.expectOne(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Dragonfly'
    );
    expect(req.request.method).toBe('GET');
    req.flush(dataMock);
  });
});
