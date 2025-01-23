import { useState } from 'react'
import './App.css'


const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please",
  "Don't do this to me",
  "I'm gonna cry...😭😭😭😭",
  "You're gonna break my heart🥺",
  "You're breaking my heart!!",
  "You're breaking my heart!!!",
  "You've broken my heart💔"
];


function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      { yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0eBYynT_gghHTj2kbyGTpxnmNloadT7uU8w&usqp=CAU"
          />
          <div className="text">Yayyyyy!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQck6dDM36K_O2-ZRA0rdYKkZaYBVkOWNJzqeel3UXbWsmk3FW_MbY8hepx7Xh-PqeYk0&usqp=CAU"
          />
          
          <div>Will you be my valentine?</div>
          <div>
            <button 
            className="yesButton"
            style={{ fontSize: yesButtonSize }}
            onClick={() => setYesPressed(true) }
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )

      }
    </div>
  )
}

export default App
