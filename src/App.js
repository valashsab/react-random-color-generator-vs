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
          padding: '10px',
          border: '1px solid black',
          borderRadius: '10px',
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
          border: '1px solid black',
          margin: '10px',
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
