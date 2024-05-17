"use client";
import React, { useState } from "react";
import "./card.css";
import Image from "next/image";

interface CardProps {
  rank: string;
  suit: "hearts" | "diamonds" | "clubs" | "spades";
  style?: React.CSSProperties;
  className?: string;
}

const Card: React.FC<CardProps> = ({ rank, suit, style, className }) => {
  const [flipped, setFlipped] = useState(false);

  const getSuitSymbol = (suit: string) => {
    switch (suit) {
      case "hearts":
        return "♥";
      case "diamonds":
        return "♦";
      case "clubs":
        return "♣";
      case "spades":
        return "♠";
      default:
        return "";
    }
  };

  const getCardImage = (rank: string, suit: string) => {
    switch (rank) {
      case "K":
        return `/img/krol-${suit}.png`;
      case "Q":
        return `/img/dama-${suit}.png`;
      case "J":
        return `/img/walet-${suit}.png`;
      default:
        return "";
    }
  };

  const suitSymbol = getSuitSymbol(suit);
  const isRed = suit === "hearts" || suit === "diamonds";
  const cardImage = getCardImage(rank, suit);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`card ${flipped ? "flipped" : ""} ${className}`}
      onClick={handleCardClick}
      style={style}
    >
      <div className="card-content" style={{ color: isRed ? "red" : "black" }}>
        {flipped ? (
          <div className="card-text">
            {rank} {suitSymbol}
          </div>
        ) : (
          <>
            <div className="corner-top-left">
              {rank}
              {suitSymbol}
            </div>
            {cardImage ? (
              <Image
                width={300}
                height={400}
                src={cardImage}
                alt={`${rank} of ${suit}`}
                className="card-image"
              />
            ) : (
              <div className="suit-large">{suitSymbol}</div>
            )}
            <div className="corner-bottom-right">
              {rank}
              {suitSymbol}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
