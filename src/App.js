// import { argv } from 'node:process';
import randomColor from 'randomcolor';
import { useState } from 'react';

// generate random color generator via useState
export default function App() {
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);

  const hue = randomColor({
    hue: 'random',
  });

  const [newHue, setNewHue] = useState(hue);

  return (
    <>
      <div
        style={{
          font: 'Courier New',
          fontSize: '35px',
          padding: '10px',
          border: '1px solid black',
          borderRadius: '10px',
          position: 'realtive',
          margin: '10px',
          backgroundColor: color,
        }}
      >
        Generated Color: {color}
      </div>
      <input
        style={{
          font: 'Courier New',
          fontSize: '15px',
          padding: '10px',
          border: '1px solid black',
          borderRadius: '10px',
          margin: '10px',
          backgroundColor: '#ffffff',
        }}
        value={newHue}
        oneChange={(event) => {
          setNewHue(event.currentTarget.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          const newColor = randomColor();
          setColor(newColor);
        }}
        style={{
          font: 'courier new',
          fontSize: '1=px',
          padding: '10px',
          border: '1px solid black',
          borderRadius: '10px',
          margin: '10px',
          backgroundColor: '#ffffff',
        }}
      >
        Generate
      </button>
    </>
  );
}

/*

// working function generating random color generator
export default function App() {
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);
  return (
    <>
      <div
        style={{
          fontSize: '35px',
          padding: '10px',
          border: '1px solid black',
          borderRadius: '10px',
          position: 'realtive',
          margin: '10px',
          backgroundColor: color,
        }}
      >
        Generated Color: {color}
      </div>
      <button
        onClick={() => {
          const newColor = randomColor();
          setColor(newColor);
        }}
        style={{
          fontSize: '15px',
          padding: '10px',
          border: '1px solid black',
          borderRadius: '10px',
          margin: '10px',
          backgroundColor: '#ffffff',
        }}
      >
        Generate
      </button>
    </>
  );
}

*/

/* create state for the input - nicht vollständig
  const requestedColor = initialColor({ hue: argv[2], luminosity: argv[3] });
  const [generatedColor, setGeneratedColor] = useState(requestedColor);
  }


  // 1.variable = input typed in browser console.log
  // [x] variable = luminosity
  // [x] variable = hue
  /* 4. connection between randomColor and transformed in hue and luminosity - meaning input value === */

/* entered input should color the div-text to the requested color
1. input field
2.
a. entered color = new variable = enteredColor =
b. randomColor transformed in hue and luminosity
3.
a. enteredColor is a dynamic variable meaning state changes with new request -->
b. const [generatedColor, setGeneratedColor] = useState(enteredColor);
c. generatedColor should be visible in the div - on change therefore in div-container

[]or create new function for hue
[] create new function for
*/
