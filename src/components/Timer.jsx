import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeTicketItems, addCredit } from "../store/tickets/tickets-slice";
import { API_DATA } from "./../apiCall";

const Timer = ({ fetchData, openModal, payInOperator }) => {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(120);

  const showResults = async (payInOperator) => {
    try {
      const response = await API_DATA.getResults(payInOperator);
      if (response.status === 200) {
        console.log("response", response.data);
        if (response.data.winAmount > 0)
          dispatch(addCredit(response.data.winAmount));

        openModal(
          `FT: ${response.data.fullTimeAwayGoals} vs ${
            response.data.fullTimeHomeGoals
          }
          HT: ${response.data.halfTimeAwayGoals} vs ${
            response.data.halfTimeHomeGoals
          }
          ${
            response.data.winAmount > 0 ? `Win: ${response.data.winAmount}` : ""
          }`,
          "primary"
        );
      } else {
        openModal("API showResults problem", "danger");
      }
    } catch (error) {
      openModal("API showResults problem catch", "danger");
      console.error(error.message);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((seconds) => seconds - 1);
      } else {
        setTimeLeft(120);
        dispatch(removeTicketItems());
        fetchData();
        showResults(payInOperator);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);
  return <p style={{ lineHeight: "center" }}>Game closes in: {timeLeft}s</p>;
};

export default Timer;
