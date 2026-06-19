import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers()

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.MODE !== 'production',
})
