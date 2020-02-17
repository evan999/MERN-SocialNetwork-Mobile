import * as React from 'react';
import { AsyncStorage } from 'react-native';

export const getToken = token => ({
  type: 'GET_TOKEN',
  token
});

export const removeToken = () => ({
  type: 'REMOVE_TOKEN'
});

export const loading = bool => ({
  type: 'LOADING',
  isLoading: bool
});

export const error = error => ({
  type: 'ERROR',
  error
});

export const getUserToken = () => dispatch =>
  AsyncStorage.getItem('userToken')
    .then(data => {
      dispatch(loading(false));
      dispatch(getToken(data));
    })
    .catch(err => {
      dispatch(loading(false));
      dispatch(error(err.message || 'ERROR'));
    });

export const removeUserToken = () => dispatch =>
  AsyncStorage.removeItem('userToken')
    .then(data => {
      dispatch(loading(false));
      dispatch(removeToken(data));
    })
    .catch(err => {
      dispatch(loading(false));
      dispatch(error(err.message || 'ERROR'));
    });

export default function Auth({ navigation }) {
  const [state, dispatch] = React.useReducer((prevState, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
    }
  });
}
