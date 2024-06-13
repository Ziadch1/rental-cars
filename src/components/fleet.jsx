import React from 'react'
import './styles/fleet.css'
function Fleet() {
    const cars = [
        {
            id:1,
            img:"./images/cars/elyse.png",
          nom: "C-Elysee Citroen",
          model: "C-Elysee",
          Mark: "Citroen",
          Year: 2017,
          toutOption: true,
          fuel: "Gas",
        },
        {
            id:2,
            img:"./images/cars/ford.png",
          nom: "Focus Ford",
          model: "Focus",
          Mark: "Ford",
          Year: 2018,
          toutOption: false,
          fuel: "Diesel",
        },
        {
            id:3,
            img:"./images/cars/corola.png",
          nom: "Corolla Toyota",
          model: "Corolla",
          Mark: "Toyota",
          Year: 2020,
          toutOption: true,
          fuel: "Hybrid",
        },
        {
            id:4,
            img:"./images/cars/civic.png",
          nom: "Civic Honda",
          model: "Civic",
          Mark: "Honda",
          Year: 2019,
          toutOption: false,
          fuel: "Gas",
        },
        {
            img:"./images/cars/tesla.png",
             id:5,
          nom: "Model S Tesla",
          model: "Model S",
          Mark: "Tesla",
          Year: 2021,
          toutOption: true,
          fuel: "Electric",
        },
        {
            id:6,
          nom: "Golf Volkswagen",
          model: "Golf",
          Mark: "Volkswagen",
          Year: 2016,
          toutOption: true,
          fuel: "Gas",
        },
      ];
  return (
    <div>
        <header>
            <h3>Vehicule model </h3>
            <h1>Our Rental Fleet</h1>
            <p>choose from a varieti of our amazing vehicules to rent for your next adventure or busnines trip</p>
            
        </header>
        <main>
            <div id='cars'>
                {
                    cars.map((i,index)=>(
                        <div>
                            <button className='car-button'>{i.nom}</button>
                        </div>
                    ))
                }
                <img src={cars[1].img} alt="" />
            </div>
        </main>
    </div>
  )
}

export default Fleet
