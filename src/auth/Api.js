import React, { useEffect, useReducer } from 'react';
import AuthReducer from 'src/context/Auth/authReducer';
import axios from 'axios';
import { HOST_API_KEY } from '../config-global';
import { setSession, removeSession, tokenCheck, toastExpireAccess } from './utils';

const instance = axios.create({
  baseURL: HOST_API_KEY,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json ' },
});

export const Api = () => {
  const initialState = {
    userToken: null,
    isLoggedIn: false,
  };
  useEffect(() => {
    isCheckUser();
  }, []);
  const isCheckUser = () => {
    dispatch({ type: 'IS_LOGGED_IN', payload: tokenCheck() });
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const handlers = React.useMemo(
    () => ({
      //хэрэглэгчийн нэвтрэх
      signIn: async (token) => {
        let payload = {
          token,
          isLoggedIn: true,
        };
        setSession(token);
        dispatch({ type: 'IS_LOGGED_IN', payload });
      },

      //хэрэглэгч гарах
      logOut: () => {
        removeSession();
        dispatch({ type: 'SIGN_OUT' });
      },

      GET: async (url, isToken = false) => {
        try {
          return instance.get(
            url,
            isToken
              ? {
                  headers: {
                    Authorization: `Bearer ${state.userToken}`,
                  },
                }
              : ''
          );
        } catch (e) {
          if (e?.response?.status === 401 || e?.response?.status === 403) {
            handlers.logOut();
            toastExpireAccess();
          }
          return e;
        }
      },

      POST: async (url, isToken = false, data) => {
        try {
          return await instance.post(
            url,
            data,
            isToken
              ? {
                  headers: {
                    Authorization: `Bearer ${state.userToken}`,
                  },
                }
              : ''
          );
        } catch (e) {
          if (e?.response?.status === 401 || e?.response?.status === 403) {
            handlers.logOut();
            toastExpireAccess();
          }
          return e;
        }
      },

      PUT: async (url, isToken = false, data) => {
        try {
          return await instance.put(
            url,
            data,
            isToken
              ? {
                  headers: {
                    Authorization: `Bearer ${state.userToken}`,
                  },
                }
              : ''
          );
        } catch (e) {
          if (e?.response?.status === 401 || e?.response?.status === 403) {
            handlers.logOut();
            toastExpireAccess();
          }
          return e;
        }
      },
    }),
    [state]
  );
  return { handlers, state, dispatch };
};
