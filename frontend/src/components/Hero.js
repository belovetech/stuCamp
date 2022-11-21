import styles from '../style';
import { discount, room } from './index.js';
import GetStarted from './GetStarted.js';


const Hero = () => (
    <section id="home" className="mb-16">
      <div className={`flex justify-center content-between flex-row bg-secondary ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:pl-16 px-6 sm:w-[60%]`}>
          <div className="flex flex-row items-center py-2 px-4 bg-black bg-opacity-20 rounded-lg mb-2">
            <img src={discount} alt="discount" className="w-6 h-6" />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white"> 30% </span>Off Registrations For <span className="text-white">This Month</span>
            </p>
          </div>

          <div className="">
            <h1 className="flex-1 text-hero_text font-poppins font-semibold text-[52px] ss:leading-[70px] leading-[75px]">Student accomodation <br /> {" "}
            <span>just for you.</span></h1>
          </div>

          <div>
            <h4 className="flex-1 text-hero_text font-poppins font-semibold mt-9 ss:text-[48x] text-[32px] ss:leading-[40px] leading-[75px]">
            Book now for 2023/2024</h4>
            <p className={`${styles.paragraph} text-hero_text max-w-[470px] mt-1`}>
              Ready for school? Find a private room, studio, shared room or apartment that suits your need.
            </p>
          </div>

        </div>
        <div className="hidden md:flex items-center w-[35%] mr-16">
          <img src={room} alt="sample room" className=""/>
        </div>
      </div>

      <div className="pl-6 sm:pl-16 xl:pl-0">
        <GetStarted />
      </div>

    </section>
)

export default Hero
