import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { cities } from "../constants";

const Locations = () => {
  return (
    <div>
      <motion.div>
        <motion.div>
          {cities.map(city => (
            <motion.div>
              <div className={`w-[230px] h-[126px]`}>
                <img src={city.img} alt={`image of ${city.name}`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Locations
