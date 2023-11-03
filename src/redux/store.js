import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

// налаштування для redux-persist
const persistConfig = {
    key: 'contacts', // ключ для LS
    storage,// сховище для збереження даних
};
// persistReducer огортає contactsReducer  з налаштуваннями persistConfig, що дозволяє зберігати стан в LS.
const persistedReducer = persistReducer(persistConfig, contactsReducer);
// створення redux-stor 
export const store = configureStore({
    reducer: {
      contacts: persistedReducer,
      filter: filterReducer
    },  
  // це для уникання помилок серіалізації при записі в localStorage
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
// // створюємо persistor об'єкт для забезпечення збереження стану в LS
export const persistor = persistStore(store); 