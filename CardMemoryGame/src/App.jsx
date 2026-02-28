import { GameHeader } from "./Components/GameHeader";
import { Card } from "./Components/Card";


const cardValues = [
  "🍒",
  "🍓",
  "🍌",
  "🍇",
  "🍋",
  "🍊",
  "🍉",
  "🍍",
  "🍒",
  "🍓",
  "🍌",
  "🍇",
  "🍋",
  "🍊",
  "🍉",
  "🍍"
] // Array for Card Values


function app() {
  return (<div className="app"><GameHeader />

    <div className="cards-grid">
      {cardValues.map((card) => (
        // loops through the array
        <Card card={card} /> // pass the card value
      ))}
    </div>
  </div>

  );
};


export default app;