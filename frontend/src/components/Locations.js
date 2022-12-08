import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { cities } from "../constants";
import { location } from '../assets';

const Locations = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div ref={carousel} className="cursor-grab overflow-hidden" whileTap={{cursor: "grabbing"}}>
        <motion.div drag="x" dragConstraints={{right: 0, left: -width }} className="flex">
          {cities.map(city => (
            <motion.div className="mx-2" key={city.name}>
              <div className={`w-[255px] h-[144px] rounded-xl bg-cover`} style={{backgroundImage: `url(${city.img})`}}>
                <div className="inline-flex ml-4 px-3 py-2 rounded-xl flex-wrap bg-white my-[90px] w-auto">
                  <img src={location} alt="location icon" />
                  <span className="ml-1 font-poppins font-normal text-[12px]">{city.sites}</span>
                </div>
              </div>
              <p className="text-hero_text font-poppins font-semibold text-[18px] my-4">{city.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Locations
