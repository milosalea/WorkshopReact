import React from "react";
import { Button } from "react-bootstrap"
import { updateBet } from "../store/tickets/tickets-slice";
import { useDispatch } from "react-redux";

const BetButon = ({ betValue }) => {
    const dispatch = useDispatch();

    const updateBetInRedux = () => {
        dispatch(updateBet(betValue));
    }
    return (
        <Button variant="success" onClick={updateBetInRedux}>
            Uplati {betValue}
        </Button>
    )
}

export default BetButon;