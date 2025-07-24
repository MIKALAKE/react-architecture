import { createSlice } from '@reduxjs/toolkit';

import { mock } from 'Helpers';

import { updateProps } from './shared';

export const initialState = {};

const increment = state => {
  state.count = (state.count || 0) + 1;
};

const decrement = state => {
  state.count = (state.count || 0) - 1;
};

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    apiError: mock,
    decrement: decrement,
    increment: increment,
    rehydrated: mock,
    updateProps: updateProps,
  },
});

export default applicationSlice;
