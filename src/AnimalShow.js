import React, { useState } from 'react'
import bird from './svg/bird.svg'
import horse from './svg/horse.svg'
import gator from './svg/gator.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import heart from './svg/heart.svg'
import './AnimalShow.css'

const mapAnimal = {
    bird:bird,
    horse:horse,
    gator:gator,
    cat:cat,
    cow:cow,
    dog:dog
};

function AnimalShow({type }) {
 const [click,setClick] = useState(0)
 const handleHeartClick =()=>{
    setClick(click + 1)
 }


  return (
    <div className='animal-show' onClick={handleHeartClick} >
         <img className='animal' alt='animal' src={mapAnimal[type]}/>
         <img className='heart' alt='heart' src={heart} style={{ width : 30 + 20 * click + 'px' }} ></img>
    </div>
  )
}

export default AnimalShow
