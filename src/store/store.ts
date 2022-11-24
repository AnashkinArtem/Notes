import { configureStore } from '@reduxjs/toolkit'
import notesSlice from './features/notesSlice';
import tagsSlice from './features/tagsSlice';

const store = configureStore({
  reducer: {
    notes: notesSlice,
    tags: tagsSlice
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch