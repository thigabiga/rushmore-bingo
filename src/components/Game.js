import React, { useState } from "react";
import Board from "./Board";

const Game = () => {

  return (
    <>
      <h1>Bingo</h1>
      <h2>Rushmore Edition</h2>
      <p>Spot the Wes Anderson trademarks.</p>
      <Board />
    </>
  );
};

export default Game;