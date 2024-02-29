import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import { createReduxHistoryContext } from 'redux-first-history';
import { rootReducer } from './rootReducer';

// ----------------------------------------------------------------------

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const store = configureStore({
  reducer: rootReducer({ router: routerReducer }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(routerMiddleware),
});

const { dispatch } = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

const history = createReduxHistory(store);

export { store, history, dispatch, useSelector, useDispatch };
