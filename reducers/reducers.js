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
    case 'SAVE_TOKEN':
      return { ...state, token: action.token };
    case 'REMOVE_TOKEN':
      return { ...state, token: action.token };
    case 'LOADING':
      return { ...state, token: action.token };
    case 'ERROR':
      return { ...state, token: action.token };
  }
};
