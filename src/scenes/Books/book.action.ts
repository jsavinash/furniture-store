// external dependencies
import {createAction} from '@reduxjs/toolkit';
import BookActionTypes from './book.action-type';
import {IBook} from './book.model';

/**
 * A noop action. There are situations where we have to perform side-effect without
 * returning further actions. A noop action comes handy in those cases.
 */
export const addBook = createAction<IBook[]>(BookActionTypes.ADD_BOOK);
