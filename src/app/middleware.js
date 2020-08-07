// external dependencies
import {getDefaultMiddleware} from '@reduxjs/toolkit';
import {createEpicMiddleware} from 'redux-observable';

// internal dependencies
import {ajax$} from '../common/utils/api';

export const epicMiddleware = createEpicMiddleware({
  dependencies: {
    ajax$: ajax$,
  },
});
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    thunk: false,
  }),
  epicMiddleware,
];

export default middleware;
