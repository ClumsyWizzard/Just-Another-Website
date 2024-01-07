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
  onInit={(typewriter) => {

    typewriter.typeString('Hi!')
    .pauseFor(600)
    .deleteAll()
    
    .changeDeleteSpeed(10)
    typewriter.typeString('Wish I could put it out in words..')
    typewriter.typeString(' What it felt like')
    typewriter.typeString('.')
      .pauseFor(200)
      typewriter.typeString('.')
    .pauseFor(1500)
      .deleteAll()
  
      typewriter.typeString('Well')
      .pauseFor(300)
      typewriter.typeString(', ')
      .pauseFor(300)
      typewriter.typeString('It\'s hard')
      typewriter.typeString('.')
      .pauseFor(300)
      typewriter.typeString('.')
      .pauseFor(300)
      typewriter.typeString('.')
      .pauseFor(300)
      .pauseFor(1500)
      .deleteAll()

      typewriter.typeString('So..')
      typewriter.typeString('I made a page to make it easier')
      typewriter.typeString('.')
      .pauseFor(300)
      typewriter.typeString('.')
      .pauseFor(1500)
      .deleteAll()

      .changeDeleteSpeed(10)
      typewriter.typeString('Will you marry')
      .pauseFor(0.1)
      .deleteChars(5)
      typewriter.typeString('go out on a date with me')
      typewriter.typeString('.')
      .pauseFor(300)
      typewriter.typeString('.')
      .pauseFor(300)
      typewriter.typeString('.')
      .pauseFor(300)
      typewriter.typeString('?')
      .pauseFor(1500)
      .start();
      
  }}
/>

 
 </div>

  <button className='no'
      onMouseOver={handleClick}
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



