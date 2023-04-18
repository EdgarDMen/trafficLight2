import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const TrafficLight = () => {
  const [color, setColor] = useState('red');
  const [selectedLight, setSelectedLight] = useState('');

  useEffect(() => {
    const changeColor = () => {
      setColor((prevColor) => {
        if (prevColor === 'red') return 'yellow';
        if (prevColor === 'yellow') return 'green';
        return 'red';
      });
    };

    const intervalId = setInterval(changeColor, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = (light) => {
    setSelectedLight(light);
    setColor(light);
  };

  const lightStyle = (lightColor) => ({
    backgroundColor: color === lightColor ? lightColor : 'gray',
    boxShadow: selectedLight === lightColor ? '0 0 10px 5px rgba(0, 0, 0, 0.4)' : 'none',
  });

  return (
    <div className="traffic-light">
      <div
        className="light red"
        style={lightStyle('red')}
        onClick={() => handleClick('red')}
      ></div>
      <div
        className="light yellow"
        style={lightStyle('yellow')}
        onClick={() => handleClick('yellow')}
      ></div>
      <div
        className="light green"
        style={lightStyle('green')}
        onClick={() => handleClick('green')}
      ></div>
    </div>
  );
};

ReactDOM.render(<TrafficLight />, document.querySelector('#app'));
export default Home;