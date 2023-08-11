import songReducer from "@/src/reducers/SongReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { song: songReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
