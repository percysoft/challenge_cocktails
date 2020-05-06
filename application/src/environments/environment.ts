// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api_cocktails:
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  url_api_detail_cocktail:
    'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=',
  url_api_search_types: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?',
  url_api_filter_type:
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
