import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const initialColor = randomColor({
    luminosity: 'random',
    hue: 'random',
  });
  const [color, setColor] = useState(initialColor);
  const generateHue = initialColor.hue;
  const [hue, setHue] = useState(generateHue);
  return (
    <>
      <h1
        style={{
          fontFamily: 'Monospace',
          fontSize: '30px',
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
          fontFamily: 'Monospace',
          fontSize: '20px',
          width: '150px',
          height: '150px',
          // paddingTop: '100%',
          // paddingLeft: '10px',
          padding: '40px',
          border: '1px solid black',
          borderRadius: '10px',
          position: 'realtive',
          margin: '10px',
          textAlign: 'center',
          backgroundColor: `${color}`,
        }}
      >
        Generated Color: {color}
      </div>
      <input
        style={{
          fontFamily: 'Monospace',
          fontSize: '15px',
          padding: '10px',
          border: '1px solid black',
          borderRadius: '10px',
          margin: '10px',
          backgroundColor: '#ffffff',
        }}
        value={hue}
        onChange={(event) => {
          setHue(event.currentTarget.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          const newColor = randomColor();
          setColor(newColor);
        }}
        style={{
          fontFamily: 'Monospace',
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
