import React from 'react'
import "./land.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Landing = ({image,name,link}) => {

  
  return (
    
    
    
    <div className='box'>
      
      <div className='sub'>
        <img src= {image}  alt= "reload" />
        <button className='btn'><Link to={link}><p>{name}</p></Link></button>

      </div>
  
    </div>
    
    )
}



export default Landing;
