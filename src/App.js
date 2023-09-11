import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const newColor = randomColor();
  const [color, setColor] = useState(newColor);
  return (
    <>
      <div
        style={{
          fontSize: '35px',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid black',
          margin: '50px',
          backgroundColor: color,
        }}
      >
        Generated Color: {color}
      </div>
      <button
        onClick={() => {
          const generateColor = randomColor();
          setColor(generateColor);
        }}
        style={{
          border: '1px solid black',
          margin: '50px',
        }}
      >
        Generate
      </button>
    </>
  );
}
