import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import scriptCreationSlice from "./scriptCreationSlice";
import localStateSlice from './localStateSlice';
import documentSlice from './docomentSlice';

// declare the reducers here
const rootReducer = combineReducers({
  // widgetAgent: widgetAgentSlice.reducer,
  // masterAgent: masterAgentSlice.reducer,
  scriptCreation: scriptCreationSlice.reducer,
  localState : localStateSlice.reducer,
  documentSlice: documentSlice.reducer,
});




// persist states and reducers
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


// Ensure that everything you put into your Redux store or dispatch as actions can be safely serialized to JSON. 
// localStorage needs objects that can be parse into JSON
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
