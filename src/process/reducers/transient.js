import { createSlice } from '@reduxjs/toolkit';

import { reset, updateProps } from './shared';

export const initialState = {};

const transientSlice = createSlice({
  name: 'transient',
  initialState,
  reducers: {
    reset: reset.bind(null, initialState),
    updateProps: updateProps,
  },
});

export default transientSlice;
