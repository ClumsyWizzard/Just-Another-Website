import React from 'react'
import Typewriter from 'typewriter-effect';
import "./form.css"
import { Link } from 'react-router-dom';

const Form = () => {
  return (
  <div className='baax'>
<section className='typer'>
 <Typewriter
  options={{
    strings: ["wanna Hnagout with me :) ?"],
    autoStart: true,
    loop: true,
  }}

 />
</section>

<div className='butt'>
<button className='yes'><Link to="/cards">Yes</Link></button>
<button className='no'>No</button>
</div>



    </div>
  )
}

export default Form