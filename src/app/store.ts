// external dependencies
import {configureStore} from '@reduxjs/toolkit';

// internal dependencies
import reducer from './reducer';

const store = configureStore({
  reducer,
});

export default store;
