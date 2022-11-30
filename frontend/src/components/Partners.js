import React from 'react'
import { alx, airbnb, holberton } from './index';

const Partners = () => {
  return (
    <div className='my-4'>
      <h3 className="font-poppins">Our Strategic Partners</h3>
      <ul className="my-4 flex justify-between">
        <li><img className="w-24 h-24" src={alx} alt="alx africa" /></li>
        <li><img className="ml-4 w-24 h-24" src={holberton} alt="holberton" /></li>
        <li><img className="ml-4 w-24 h-24" src={airbnb} alt="airbnb" /></li>
      </ul>
    </div>
  )
}

export default Partners
