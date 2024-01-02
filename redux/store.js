import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {logger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

// Importing the User reducer from the ./reducers/User file
import User from './reducers/User';
import Categories from './reducers/Categories';
import Donations from './reducers/Donations';

// Creating a rootReducer that combines all reducers in the app

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations,
});
const congiguration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(congiguration, rootReducer);

// Creating a new Redux store using the configureStore function
// We're passing in the rootReducer as the main reducer for the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger);
  },
});

// Exporting the store to be used in the app
export default store;

export const persistor = persistStore(store);
