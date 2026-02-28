import { GameHeader } from "./Components/GameHeader";
import { Card } from "./Components/Card";
import { useEffect, useState } from "react";


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


function App() {
  const [cards, setCards] = useState([]); // keep track of cards by using a state

  const initializeGame = () => {
    // Shuffle the cards


    const finalCards = cardValues.map((value, index) => ( //value:fruit, index: position

      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false
      }));

    setCards(finalCards);
  };
  useEffect(() => {
    initializeGame();

  }, [])


  const handleCardClick = (card) => {
    // dont allow clicking if the card is already flipped
    if (card.isFlipped || card.isMatched) {
      return;
    }

    // update card flipped state

    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true } // making the flip transition
      } else {
        return c;
      }
    });

    setCards(newCards);

  };

  return (<div className="app"><GameHeader />

    <div className="cards-grid">
      {cards.map((card) => (
        // loops through the array
        <Card card={card} onClick={handleCardClick} /> // pass the card value
      ))}
    </div>
  </div>

  );
};


export default App;