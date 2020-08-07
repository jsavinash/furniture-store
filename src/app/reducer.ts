import {combineReducers} from '@reduxjs/toolkit';
import bookReducer from '../scenes/Books/book.reducer';
const rootReducer = combineReducers({
  book: bookReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
