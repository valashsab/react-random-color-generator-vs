import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);
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
          const newColor = randomColor();
          setColor(newColor);
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
