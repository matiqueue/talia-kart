import React from "react";
import CardDeck from "../components/card-deck";
import { NavigationMenuDemo } from "@/components/navbar";

const Home: React.FC = () => {
  return (
    <main>
      <NavigationMenuDemo />
      <div className="border">
        <CardDeck />
      </div>
    </main>
  );
};

export default Home;
