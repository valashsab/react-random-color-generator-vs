import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  // create state for the button
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);

  /* create state for the input - nicht vollständig
  const colorHue = initialColor.hue;
  const [generatedColorHue, setGeneratedColorHue] = useState(colorHue);
  })
  */
  const hue = randomColor({
    hue: 'blue',
  });

  const luminosity = 'light';
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
        {/* try if function in css is possible
original:    Generated Color: {color}
      */}
        Generated Color:{color};
      </div>

      <input
        style={{
          fontSize: '15px',
          padding: '10px',
          border: '1px solid black',
          borderRadius: '10px',
          margin: '10px',
          backgroundColor: '#ffffff',
        }}
        value={generatedColorHue}
        onChange={(event) => setGeneratedColorHue(event.currentTarget.value)}
      />
      <br />
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

/* working function generating random color generator
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
