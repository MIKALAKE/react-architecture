const reset = (initialState = {}) => initialState;

const updateProps = (state, action) => {
  return {
    ...state,
    ...action.payload,
  };
};

export { reset, updateProps };
