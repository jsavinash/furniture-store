// external dependencies
import {combineEpics} from 'redux-observable';
import * as bookEpic from '../scenes/Books/book.epic';
// internal dependencies

const rootEpic = combineEpics(bookEpic.addBookEpic);

export default rootEpic;
