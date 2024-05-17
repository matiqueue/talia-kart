"use client";
import React, { useState } from "react";
import Card from "./card";
import "./card-deck.css";

const suits = ["hearts", "diamonds", "clubs", "spades"] as const;
const ranks = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const CardDeck: React.FC = () => {
  const [deckOpened, setDeckOpened] = useState(false);

  const handleDeckClick = () => {
    setDeckOpened(true);
  };

  return (
    <div className="card-deck-container">
      {!deckOpened ? (
        <img
          src="../img/talia.png"
          alt="Deck"
          className="deck-cover"
          onClick={handleDeckClick}
        />
      ) : (
        <div className="card-deck">
          {suits.map((suit) =>
            ranks.map((rank) => (
              <Card key={`${rank}${suit}`} rank={rank} suit={suit} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CardDeck;
