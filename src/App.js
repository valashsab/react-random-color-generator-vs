import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const initialColor = randomColor({
    luminosity: 'random',
    hue: 'random',
  });
  const [color, setColor] = useState(initialColor);
  // const generateHue = initialColor.hue;
  // const [hue, setHue] = useState(generateHue);
  return (
    <>
      <h1
        style={{
          fontFamily: 'Monospace',
          fontStretch: 'ultra-expanded',
          fontSize: '2rem',
          marginLeft: '10px',
          marginBottom: '10px',
          textTransform: 'uppercase',
        }}
      >
        Random Color Generator
      </h1>
      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Monospace',
          fontSize: '1.5rem',
          width: '150px',
          height: '150px',
          padding: '40px',
          border: '1px solid black',
          borderRadius: '10px',
          margin: '10px',
          backgroundColor: `${color}`,
        }}
      >
        Generated Color: {color}
      </div>
      {/* <input
        style={{
          fontFamily: 'Monospace',
          fontSize: '1.25rem',
          padding: '10px',
          border: '1px solid black',
          borderRadius: '10px',
          margin: '10px',
          backgroundColor: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        value={hue}
        onChange={(event) => {
          setHue(event.currentTarget.value);
        }}
      /> */}
      <br />
      <button
        onClick={() => {
          const newColor = randomColor();
          setColor(newColor);
        }}
        style={{
          fontFamily: 'Monospace',
          fontSize: '1rem',
          padding: '10px',
          border: '1px outset black',
          borderRadius: '35% 5%',
          margin: '10px',
          backgroundColor: '#D8D4CA',
        }}
      >
        Generate
      </button>
    </>
  );
}
