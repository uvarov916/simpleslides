import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";



const KEYCODES = {
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};

const SLIDES = [
  {
    heading: "Slide 1",
    description: "Description 1"
  },
  {
    heading: "Slide 2",
    description: "Description 2"
  },
  {
    heading: "Slide 3",
    description: "Description 3"
  }
]

function Slide(props) {
  return (
    <div className="slide">
      <h1 className="slide_heading">{props.heading}</h1>
      <p className="slide_description">{props.description}</p>
    </div>
  )
}

function App() {

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    console.log('test');
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    }
  })

  const handleKeyboard = (e) => {
    switch (e.keyCode) {
      case KEYCODES.LEFT_ARROW:
        console.log('<-');
        setSlideIndex(slideIndex - 1);
        break;
      case KEYCODES.RIGHT_ARROW:
        console.log('->');
        setSlideIndex(slideIndex + 1);
        break;
      default: 
        console.log('bs');
    }
  }

  return (
    <div className="App">  
      <Slide 
        heading={SLIDES[slideIndex].heading} 
        description={SLIDES[slideIndex].description} />
    </div>
  );
}

export default App;
