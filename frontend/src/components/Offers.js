import React from 'react'
import { rooms } from "../constants";
import styles from '../style';

const Offers = () => {
  return (
    <section className="my-10 sm:pl-16 px-6">
      <h3 className="text-primary font-poppins font-semibold text-[28px] my-5">Offers and Packages</h3>
      <div className="flex flex-wrap justify-center">
        {rooms.map((room) => (
          <div className="w-[450px] md:w-[45%] mx-4 my-4" key={room.name}>
            <div className={`h-[500px] md:h-[20vw] rounded-xl bg-cover bg-no-repeat`} style={{backgroundImage: `url(${room.img})`}}>
              <h4 className="text-white font-poppins font-semibold text-[28px]">{room.name}</h4>
              <p className="text-white font-poppins font-semibold text-[18px] my-4">{room.title}</p>
              <div className={`mt-8 cursor-pointer ${styles.button_white}`}>
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
