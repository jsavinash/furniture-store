// external dependencies
import {createEntityAdapter, createReducer} from '@reduxjs/toolkit';
import BookActionTypes from './book.action-type';
import {IBook} from './book.model';

/**
 * A noop action. There are situations where we have to perform side-effect without
 * returning further actions. A noop action comes handy in those cases.
 */

const bookEntityAdapter = createEntityAdapter<IBook>({
  selectId: (book) => book.id,
});

const jobInitialState = bookEntityAdapter.getInitialState({
  count: 10,
});
export const bookReducers = {};

/**
 * Reducer to set state if video uploaded.
 * @param {Object} state The job state.
 */
bookReducers[BookActionTypes.ADD_BOOK] = function (state, action) {
  let {books} = action.payload;
  return bookEntityAdapter.addMany(state, books);
};

bookReducers[BookActionTypes.RESET_BOOKS] = function (state) {
  return bookEntityAdapter.removeAll(state);
};

bookReducers[BookActionTypes.REMOVE_BOOK_BY_ID] = function () {};

bookReducers[BookActionTypes.UPDATE_BOOK] = function () {};

export default createReducer(jobInitialState, bookReducers);
