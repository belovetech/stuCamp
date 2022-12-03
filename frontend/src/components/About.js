import styles from '../style'
import { Link } from 'react-router-dom'
import { about, linkedin2, github } from './index.js'
import { team } from '../constants';

const About = () => (
  <section id="home" className={`bg-secondary`}>
    <div className={`w-[100vw]`}>
      <div
        className="text-primary text-[70px] font-semibold min-h-[700px] max-h-full flex justify-center items-center bg-no-repeat bg-cover xl:px-0 sm:pl-16 px-6"
        style={{ backgroundImage: `url(${about})` }}
      >
        About us
      </div>
    </div>
    <div
      className={`${styles.boxWidth} mx-auto sm:pb-16 pb-6 my-16 flex justify-center content-between flex-row bg-secondary`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col justify-center sm:pl-32 px-8`}
      >
        <div className="mt-8 flex justify-center w-[100%]">
          <p className="text-white font-bold text-[30px] w-[300px]">"The best way to find yourself is to lose yourself in the service of others." - Ghandi</p>
        </div>
        <div className="mt-16">
          <h3 className="text-primary font-poppins font-semibold text-[28px]">We Believe</h3>
          <p className="font-poppins mt-2 w-[60vw] text-justify">
            At stucamp we believe in treating other people like we want to be treated. We believe students should be treated with respect, care and the utmost hospitality as they go through the rigours of school to become future leaders and world shapers.
            stuCamp aims to provide first class services to its clients, and to promote a healthy environments for students of all types.
          </p>
        </div>
        <div className="mt-16">
          <h3 className="text-primary font-poppins font-semibold text-[28px]">We're ready</h3>
          <p className="font-poppins mt-2 w-[60vw] text-justify">The journey's better when we do it together. So, we've built everything you need from relaxed study rooms to inviting social spaces where you can kick back at any hour of the day. Find more than a home, find your community.</p>
        </div>
      </div>
    </div>
    <div className={`${styles.flexStart} bg-white w-[100%] py-16 flex flex-col sm:pl-32 px-8`}>
      <h2  className="text-primary text-[50px] font-semibold">The team</h2>
      <div className="flex mx-auto justify-between flex-col ss:flex-row my-20 w-[100%] xl:w-[1200px]">
        {team.map((member) => (
          <div className="flex flex-col mb-10" key={member.name}>
            <img className="rounded-full mx-auto w-[100px] ss:w-[150px]" src={member.img} alt={member.name} />
            <h4 className="font-poppins text-primary mx-auto font-semibold sm:text-[22px]">{member.name}</h4>
            <p className="font-poppins text-secondary mx-auto">{`< ${member.title} />`}</p>
            <ul className="flex justify-center gap-x-2 mx-auto w-[100px]">
              <li><a href={member.linkedin}><img src={linkedin2} alt="linkedin" /></a></li>
              <li><a href={member.github}><img src={github} alt="github" /></a></li>
            </ul>
          </div>
        ))}

      </div>
    </div>
  </section>
)

export default About
