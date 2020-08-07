import {mergeMap, withLatestFrom} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {of, EMPTY} from 'rxjs';
import BookActionTypes from './book.action-type';

export const addBookEpic = (action$, store$) =>
  action$.pipe(
    ofType(BookActionTypes.ADD_BOOK),
    withLatestFrom(store$),
    mergeMap((data: any) => {
      const [action, store] = data;
      console.log('action------->', action);
      console.log('store', store);
      return of(EMPTY);
    }),
  );
