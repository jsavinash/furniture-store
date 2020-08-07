// external dependencies
import {getDefaultMiddleware} from '@reduxjs/toolkit';
import {createEpicMiddleware} from 'redux-observable';

// internal dependencies

export const epicMiddleware = createEpicMiddleware({});

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    thunk: false,
  }),
  epicMiddleware,
];

export default middleware;
