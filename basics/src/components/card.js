import React from 'react'
import { data } from '../config/data'
import Landing from '../Next/landing'
import"./card.css"

const Cards = () => {
  const Data = data.map((value)=> {
      return (
    <Landing
      name = {value.name}
      image = {value.img}
      link = {value.link}
      />
      )
})

return (
  <div>
    <h1 className='title'>What would you choose?</h1>
    <section className='baksa'>
    {Data}
    </section>
  </div>
  )
}

export default Cards