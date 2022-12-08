import React from 'react'
import Carousel from 'react-elastic-carousel';
import styles from '../style';
import { useRef } from "react";
import Item from "./Item"
import { reviews } from '../constants';
import { next, prev } from '../assets';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]

const Reviews = () =>  {
  const carousel = useRef();
  return (
    <div className="my-10 sm:px-16 px-6">
        <h2 className="flex justify-between text-primary font-poppins font-semibold text-[50px]">Reviews
          <span>
            <button onClick={() => carousel.slidePrev()}><img src={prev}/></button>
            <button onClick={() => carousel.slideNext()}><img src={next}/></button>
          </span>
        </h2>
        <Carousel ref={carousel} breakPoints={breakPoints}
          itemsToScroll={3}
          itemPadding={[0, 260]}
          showEmptySlots
          easing="cubic-bezier(1,.15,.55,1.54)"
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          transitionMs={700}
          className="mt-6">
          {reviews.map((review) => (
            <Item key={review.id} className="">
                <div className="absolute z-10 mx-8 w-[300px] top-16 text-white text-[20px]">
                  <p className="text-white font-bold text-[50px] brightness-[1.75] leading-3">"</p>
                    <p>{`${review.content}`}</p>
                  <p className="text-white font-bold text-[50px] leading-">" <span className="text-white font-bold text-[25px]">{` - ${review.name}, ${review.school.toUpperCase()}`}</span></p>
                </div>
                <div className={`w-[450px] h-[450px] bg-cover bg-no-repeat grayscale-[100%] contrast-125 brightness-50`} style={{backgroundImage: `url(${review.header})`}}>
                </div>

                <div className="flex flex-wrap justify-between bottom-0 h-[50px]">
                  <span className="">{[...Array(parseInt(review.stars))].map((star, idx) => (
                    <span key={idx}>⭐️</span>
                  ))}
                  </span>
                  <img className="z-20 absolute ml-[12%] -bottom-0 rounded-full w-[100px] h-[100px]" src={review.img} alt={review.name} />
                  <span className="font-poppins text-primary font-bold">{review.date}</span>

                </div>
            </Item>
          ))}
        </Carousel>
    </div> );
}

export default Reviews
