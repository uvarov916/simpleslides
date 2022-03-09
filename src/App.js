import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";



const KEYCODES = {
  LEFT_ARROW: 37,
  UP_ARROW: 38,
  RIGHT_ARROW: 39,
  DOWN_ARROW: 40
};

const SLIDES = [
  [{
    heading: "Slide 1.1",
    description: "Description 1.1"
  },
  {
    heading: "Slide 1.2",
    description: "Description 1.2"
  }],
  [{
    heading: "Slide 2",
    description: "Description 2"
  }],
  [{
    heading: "Slide 3.1",
    description: "Description 3.1"
  },
  {
    heading: "Slide 3.2",
    description: "Description 3.2"
  },
  {
    heading: "Slide 3.3",
    description: "Description 3.3"
  }],
  
]

function Slide({slide}) {
  return (
    <div className="slide">
      <h1 className="slide_heading">{slide.heading}</h1>
      <p className="slide_description">{slide.description}</p>
    </div>
  )
}

function App() {

  const [slideIndex, setSlideIndex] = useState(() => {
    return {
      x: 0,
      y: 0
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    }
  })

  const handleKeyboard = (e) => {
    switch (e.keyCode) {
      case KEYCODES.LEFT_ARROW:
        console.log('←');
        setSlideIndex(({x, y}) => {
          let [newX, newY] = x > 0 ? [x - 1, 0] : [x, y]; 
          return {
            x: newX,
            y: newY
          }
        });
        break;
      case KEYCODES.RIGHT_ARROW:
        console.log('→');
        setSlideIndex(({x, y}) => {
          let [newX, newY] = x < SLIDES.length - 1 ? [x + 1, 0] : [x, y]; 
          return {
            x: newX,
            y: newY
          }
        });
        break;
      case KEYCODES.UP_ARROW:
        console.log('↑');
        setSlideIndex(({x, y}) => {
          let [newX, newY] = y > 0 ? [x, y - 1] : [x, y]; 
          return {
            x: newX,
            y: newY
          }
        });
        break;
      case KEYCODES.DOWN_ARROW:
        console.log('↓');
        setSlideIndex(({x, y}) => {
          let [newX, newY] = y < SLIDES[x].length - 1 ? [x, y + 1] : [x, y]; 
          return {
            x: newX,
            y: newY
          }
        });
        break;
      default: 
        console.log(`Keycode '${e.keyCode}' not supported`);
    }
  }

  return (
    <div className="App">  
      <div className="slidesContainer">
        <Slide slide={SLIDES[slideIndex.x][slideIndex.y]} />
      </div>
    </div>
  );
}

export default App;