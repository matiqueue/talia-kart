"use client";
import React, { useState, useEffect } from "react";
import Card from "./card";
import "./card-deck.css";
import Image from "next/image";

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
  const [visibleCards, setVisibleCards] = useState(0);

  const handleDeckClick = () => {
    setDeckOpened(true);
  };

  useEffect(() => {
    if (deckOpened && visibleCards < suits.length * ranks.length) {
      const timeout = setTimeout(() => {
        setVisibleCards(visibleCards + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [deckOpened, visibleCards]);

  return (
    <div className="card-deck-container">
      {!deckOpened ? (
        <div className="deck-cover" onClick={handleDeckClick}>
          <Image src="/img/talia.png" alt="Deck" width={300} height={300} />
        </div>
      ) : (
        <div className="card-deck">
          {suits.flatMap((suit) =>
            ranks.map((rank, index) => (
              <Card
                key={`${rank}${suit}`}
                rank={rank}
                suit={suit}
                style={{ animationDelay: `${index * 0.1}s` }}
                className={
                  visibleCards > index + suits.indexOf(suit) * ranks.length
                    ? "visible"
                    : ""
                }
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CardDeck;
