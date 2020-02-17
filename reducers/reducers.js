import { combineReducers } from 'redux';

const rootReducer = (
  state = {
    token: {},
    loading: true,
    error: null
  },
  action
) => {
  switch (action.type) {
    case 'GET_TOKEN':
      return { ...state, token: action.token };
  }
};
