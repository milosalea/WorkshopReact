import { configureStore } from "@reduxjs/toolkit";
import { ticketsSlice } from "../store/tickets/tickets-slice";
export const store = configureStore({
  reducer: {
    tickets: ticketsSlice.reducer,
  },
});

export default store;
