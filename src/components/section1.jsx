import React from 'react'
import { IoCarSportSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import './styles/styleSec1.css'
function Sec() {
  const item=[
    {
      img:"./images/car-insurance.png",
      title:"select car",
      description:"we offers a big range of vehicles for all you driving needs . we have the perfect car to meet your needs",
    },
    {
      img:"./images/operator.png",
      title:"Contact Operateur",
      description:"dbdkenjk jekzekzj jzenjelznjzl jnzl:nzk",

    },
    {
      img:"./images/driving.png",
      title:"Let's drive",
      description:"dbdkenjk jekzekzj jzenjelznjzl jnzl:nzk",

    }

  ]
  return (
    <div>
      <h3>plan your trip easy</h3>
      <h1>Quick & easy car rental</h1>
      <div id='cards'>
        {
          item.map((card,idenx)=>(
           <div id='card'>
             <h2 id='pTitle'>{card.title}</h2>
            <img src={card.img} alt="" />
            <p>{card.description}</p>
           </div>

          ))
        }
      </div>
    </div>
  )
}

export default Sec
