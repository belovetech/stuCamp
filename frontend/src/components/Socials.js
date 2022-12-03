import React from 'react';
import { badge_white } from './index';
// import { socialMedia } from '../constants';

const Socials = () => (
    <div className="flex justify-between items-center">
        <div className="flex flex-wrap items-center my-4">
            <span className="border rounded-full ss:flex justify-center bg-white px-3 py-3 bg-primary"><img className="fill-white" src={badge_white} alt="stucamp logo" /></span>
            <span className="ml-2 flex flex-col text-primary font-poppins font-semibold leading-[16px]">
                <span>stuCamp</span>
                <span>accomodation</span>
            </span>
        </div>
        <div className="flex justify-between">
            {/* {socialMedia.map((medium) => (
                <span className="ml-4" key={medium.id}><a href={medium.link}><img className="w-7 h-7" src={medium.icon} alt={medium.name} /></a></span>
            ))} */}
        </div>
    </div>
  )

export default Socials
