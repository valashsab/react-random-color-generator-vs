import randomColor from 'randomcolor';
import { useState } from 'react';

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
      <div
        style={{
          font: 'Courier New',
          fontSize: '35px',
          padding: '10px',
          border: '1px solid black',
          borderRadius: '10px',
          position: 'realtive',
          margin: '10px',
          backgroundColor: `${color}`,
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
