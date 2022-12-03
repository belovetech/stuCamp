import React from 'react'
import { rooms } from "../constants";
import styles from '../style';

const Offers = () => {
  return (
    <section className="my-10 sm:pl-16 px-6">
      <h3 className="text-primary font-poppins font-semibold text-[28px] my-5">Offers and Packages</h3>
      <div className="flex flex-wrap justify-center max-w-4xl mx-auto">
        {rooms.map((room) => (
            <div className={`flex flex-col justify-end w-[400px] mx-4 my-4 h-[500px] rounded-xl bg-cover bg-no-repeat`} key={room.name} style={{backgroundImage: `url(${room.img})`}}>
              <div className="flex flex-col justify-center my-8">
                <h4 className="ml-[10%] text-white font-poppins font-semibold text-[28px]">{room.name}</h4>
                <p className="ml-[10%] text-white font-poppins font-semibold text-[18px] my-8">{room.title}</p>
                <div className={`mt-8 mx-auto cursor-pointer ${styles.button_white}`}>
                    <p>Book your room</p>
                </div>
              </div>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Offers
