import React from "react";

// TODO: iz propsa izvuci imena timova i prikazati ih u komponenti
const GameInfo = ({homeTeam, awayTeam}) => {
  return <p>{homeTeam} vs {awayTeam}</p>;
};

export default GameInfo;
