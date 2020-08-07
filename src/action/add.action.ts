import {createAction} from '@reduxjs/toolkit';

/**
 * Action to repond when fetchCanJobApplyFailed action is failed.
 */
export const add = createAction<null, string>('[Add] Add Something');
