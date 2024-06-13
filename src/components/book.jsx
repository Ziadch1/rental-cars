import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { IoCarSportSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import './styles/stylebook.css'
function Book() {
    const cars = [
        {
          nom: "C-Elysee Citroen",
          model: "C-Elysee",
          Mark: "Citroen",
          Year: 2017,
          toutOption: true,
          fuel: "Gas",
        },
        {
          nom: "Focus Ford",
          model: "Focus",
          Mark: "Ford",
          Year: 2018,
          toutOption: false,
          fuel: "Diesel",
        },
        {
          nom: "Corolla Toyota",
          model: "Corolla",
          Mark: "Toyota",
          Year: 2020,
          toutOption: true,
          fuel: "Hybrid",
        },
        {
          nom: "Civic Honda",
          model: "Civic",
          Mark: "Honda",
          Year: 2019,
          toutOption: false,
          fuel: "Gas",
        },
        {
          nom: "Model S Tesla",
          model: "Model S",
          Mark: "Tesla",
          Year: 2021,
          toutOption: true,
          fuel: "Electric",
        },
        {
          nom: "Golf Volkswagen",
          model: "Golf",
          Mark: "Volkswagen",
          Year: 2016,
          toutOption: true,
          fuel: "Gas",
        },
      ];
      
  return (
    <div id='booking'>
        <h1>Book a car</h1>
        <form>
          <div>
            <label htmlFor="car-select">
              <IoCarSportSharp className="icon" /> Select Your Car Type <span className="required">*</span>
            </label>
            <select id="car-select">
                <option value="">Select your car type</option>
                {cars.map((car, indx) => (
                    <option key={indx} value={indx}>{car.nom}</option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="pickup-location">
              <CiLocationOn className="icon" /> Pick-up <span className="required">*</span>
            </label>
            <select id="pickup-location">
                <option value="">Select pick up location</option>
                <option value="rabat">Rabat</option>
                <option value="tanger">Tanger</option>
                <option value="marrakech">Marrakech</option>
                <option value="agadir">Agadir</option>
            </select>
          </div>
          <div>
            <label htmlFor="dropoff-location">
              <CiLocationOn className="icon" /> Drop-off <span className="required">*</span>
            </label>
            <select id="dropoff-location">
                <option value="">Select drop off location</option>
                <option value="rabat">Rabat</option>
                <option value="tanger">Tanger</option>
                <option value="marrakech">Marrakech</option>
                <option value="agadir">Agadir</option>
            </select>
          </div>
          <div>
            <label htmlFor="pickup-date">
              <FaCalendarAlt className="icon" /> Pick-up <span className="required">*</span>
            </label>
            <input type="date" id="pickup-date" placeholder="mm / dd / yyyy" />
          </div>
          <div>
            <label htmlFor="dropoff-date">
              <FaCalendarAlt className="icon" /> Drop-off <span className="required">*</span>
            </label>
            <input type="date" id="dropoff-date" placeholder="mm / dd / yyyy" />
          </div>
          <button type="submit">Search</button>
        </form>
    </div>
  );
}

export default Book;
