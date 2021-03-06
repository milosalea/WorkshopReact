import { createSlice } from "@reduxjs/toolkit";

export const ticketsSlice = createSlice({
  name: "ticket",
  initialState: {
    gameData: [],
    balance: 10,
    payIn: 0,
  },
  reducers: {
    // add or remove ticket item to redux when clicked on panel
    addTicketItem: (state, { payload }) => {
      if (!state.gameData.some((x) => x === payload)) {
        state.gameData.push(payload);
      } else {
        state.gameData = state.gameData.filter((x) => x !== payload);
      }
    },
    removeTicketItems: (state) => {
      state.gameData = [];
    },
    updateCredit: (state, { payload }) => {
      state.gameData = [];
      state.balance -= +payload.bet;
    },
    addCredit: (state, { payload }) => {
      state.balance += +payload;
    },
  },
});
export const { addTicketItem, removeTicketItems, updateCredit, addCredit } =
  ticketsSlice.actions;

export const getTicket = (state) => state.tickets;
export default ticketsSlice.reducer;
