import React from 'react'
import "./land.css"
import Typewriter from 'typewriter-effect';
const Landing = () => {
  return (
    <div className='box'>
    <div className='wrapper'>
     <Typewriter
  options={{
    strings: ['Do You Wanna Hangout', 'With ME'],
    autoStart: true,
    loop: true,
  }}
/>
    </div>
     <div className='hero'>
    <p>Reasons to hang out with me </p>
    <img  className = "qt" src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2ozNWozMHF4b2Z4M2x6MnFtc3ZyNGh2ZG50a2htb2psaWM5NWJpYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Wd4X2eRNbKEqFuIeGm/giphy.gif'/>
    </div>
    <div className='why'>

    <Typewriter
  options={{
    strings: ['Do You Wanna Hangout', 'With ME'],
    autoStart: true,
    loop: true,
  }}
/>

<Typewriter
  options={{
    strings: ['Do You Wanna Hangout', 'With ME'],
    autoStart: true,
    loop: true,
  }}
/>

<Typewriter
  options={{
    strings: ['Do You Wanna Hangout', 'With ME'],
    autoStart: true,
    loop: true,
  }}
/>

<Typewriter
  options={{
    strings: ['Do You Wanna Hangout', 'With ME'],
    autoStart: true,
    loop: true,
  }}
/>

<Typewriter
  options={{
    strings: ['Do You Wanna Hangout', 'With ME'],
    autoStart: true,
    loop: true,
  }}
/>

<Typewriter
  options={{
    strings: ['Do You Wanna Hangout', 'With ME'],
    autoStart: true,
    loop: true,
  }}
/>
    </div>
<div className='section'>
    <button className='yes'>Yes</button>
    <button className='no'>No</button>
    </div>
    </div>
  )
}

export default Landing