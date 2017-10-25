import { combineReducers } from 'redux';

const app = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Group all reducers into single object.
const reducers = {
  app,
};

// Combine all reducers together.
export default combineReducers(reducers);
