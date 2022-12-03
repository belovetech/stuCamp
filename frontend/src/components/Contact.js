import styles from '../style'
import { Link } from 'react-router-dom'
import { contact } from './index.js'

const Contact = () => (
  <section id="home" className={`bg-secondary`}>
    <div className={`w-[100vw]`}>
      <div
        className="text-primary text-[70px] font-semibold min-h-[700px] max-h-full flex justify-center items-center bg-no-repeat xl:px-0 sm:pl-16 px-6"
        style={{ backgroundImage: `url(${contact})` }}
      >
        Contact us
      </div>
    </div>
    <div
      className={`${styles.boxWidth} sm:pb-16 pb-6 my-16 flex justify-center content-between flex-row bg-secondary`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col justify-center sm:pl-32 px-8 sm:w-[60%]`}
      >
        <div>
          <h3 className="font-poppins font-semibold text-[28px]">General enquiries</h3>
          <p className="font-poppins">
            For general queries or if you cannot find the property you want to
            contact below, please email{' '}
            <a className="text-primary font-semibold" href="mailto:hello@stucamp.com">hello@stucamp.com </a>
            and we'll get back to you as soon as we can.
          </p>
        </div>
        <div className="mt-16">
          <h3 className="font-poppins font-semibold text-[28px]">Head office</h3>
          <p className="font-poppins">StuCamp Towers, 5th Floor, Ikeja, Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
