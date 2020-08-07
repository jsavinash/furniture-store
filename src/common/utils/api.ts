// external dependencies
import {fromFetch} from 'rxjs/fetch';
import {switchMap, catchError} from 'rxjs/operators';
import {throwError, of} from 'rxjs';

/**
 * Dispaches an ajax call.
 * @param {String} endpoint The API endpoint
 * @param {Object} config The fetch API config
 */
export function ajax$(endpoint, config = {}) {
  return fromFetch(endpoint, config).pipe(
    switchMap((response: any) => {
      if (response.ok) {
        return response.text();
      } else {
        return response;
      }
    }),
    switchMap((data: any) => {
      if (data.hasError) {
        return throwError(data);
      }
      return of(data);
    }),
    switchMap((data: any) => of(data ? JSON.parse(data) : {})),
    catchError((err) => {
      return throwError(err);
    }),
  );
}
