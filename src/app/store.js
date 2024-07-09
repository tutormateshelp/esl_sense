import { configureStore } from "@reduxjs/toolkit";
import planYourDayReducer from "../features/planYourDay/planYourDaySlice";

export const store = configureStore({
  reducer: {
    planYourDay: planYourDayReducer,
  },
});
