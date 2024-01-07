import Typewriter from 'typewriter-effect';
import "./form.css"
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Form = () => {

  const getRandomPosition = () => ({
    top: Math.random() * (window.innerHeight - 50) + 'px',
    left: Math.random() * (window.innerWidth - 100) + 'px',
  });

  const [position, setPosition] = useState(getRandomPosition);

  const handleClick = () => {
    setPosition(getRandomPosition());
  };

  useEffect(() => {
    const handleResize = () => {
      setPosition(getRandomPosition());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only on mount and unmount


  return (
  <div className='baax'>
    <div className='typer'>
<Typewriter
  options={{
    strings: ["wanna Hnagout with me :) ?"],
    autoStart: true,
    loop: true,
  }}
 /> 
 </div>

  <button className='no'
      onClick={handleClick}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
      }}
    >
      No
    </button>

    <div>
      <button className='yes'><Link to="/cards"><p>Yes</p></Link></button>
    </div>
    </div>
  )
}

export default Form



