import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { getTicket, updateCredit, updateBet } from "../store/tickets/tickets-slice";
import { store } from "../store/store";
import { API_DATA } from "../apiCall";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const PlayTicket = ({ openModal, payInOperator }) => {
  const dispatch = useDispatch();
  const bet = useSelector(state => state.tickets.bet);

  const updateBetInRedux = (betValue) => {
    dispatch(updateBet(betValue));
  }
  const playTicket = () => {
    const ticket = getTicket(store.getState());
    // TODO: prilikom uplate unutar const ticket mora se nalaziti minimalno jedna opklada
    if (ticket.gameData.length < 1) {
      openModal("Please choose bet type", "warning");
    }
    // TODO: broj tiketa mora biti <= balansu i
    // kada se oduzme balance od bet-a mora biti >= 0 i
    // bet mora biti > 0 i
    // balance mora biti > 0
    else if ((ticket.gameData.length <= bet) && ((ticket.balance - bet) >= 0) && (bet >= 0) && (ticket.balance > 0)) {
      payInTicket(ticket.gameData);
    } else {
      openModal("Problem with bet", "danger");
    }
  };
  const payInTicket = async (ticket) => {
    try {
      const postData = {
        matchId: 1,
        betIds: ticket,
        payIn: bet,
        payInOperator,
      };
      const response = await API_DATA.createTicket(postData);
      if (response.status === 200) {
        dispatch(updateCredit({ bet }));
        openModal("Successful insert", "primary");
        updateBetInRedux(1);
      } else {
        openModal("API problem", "danger");
      }
    } catch (error) {
      openModal("API problem catch", "danger");
      console.error(error.message);
    }
  };
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Place Bet"
        aria-label="Place Bet"
        aria-describedby="basic-addon2"
        type="number"
        value={bet}
        onChange={(event) => { updateBetInRedux(event.target.value) }}
      // TODO: prilikom unosa uplate na ticket uraditi update setBet - useState hook-a // koristiti onChange
      />
      {/* TODO:  na click pozvati funkciju playTicket*/}
      <Button variant="success" id="playTicket" onClick={playTicket}>
        Play ticket
      </Button>
    </InputGroup>
  );
};

export default PlayTicket;
