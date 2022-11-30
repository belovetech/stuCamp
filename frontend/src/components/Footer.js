import React from 'react'
import Socials from './Socials'
import Cities from './Cities'
import Partners from './Partners'
import Newsletter from './Newsletter'

const Footer = () => (
    <section className="my-10 sm:pl-16 px-6">
      <ul>
        <li className="border-b my-4">
          <Socials />
        </li>
        <li className="border-b my-4">
          <Cities />
        </li>
        <li className="border-b my-4 flex justify-between items-center">
            <Partners />
            <Newsletter />
        </li>
        <li className="font-poppins">
          <span>&copy; 2022 STUCAMP LIMITED</span>
        </li>
      </ul>

    </section>
  )

export default Footer
