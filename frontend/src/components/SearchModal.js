import { search } from './index.js';
import { cities } from '../constants'
import { useState } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SearchModal = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
    <section>
        <div className="flex items-center border text-tertiary rounded-3xl px-8 py-2">
            <img src={search} alt="search" />
            <input type="text" className="outline-0 block w-full rounded-md pl-7 pr-12 sm:text-sm" placeholder="Search by city, uni or building"
                onChange={e => {setSearchTerm(e.target.value)}}/>
        </div>
        <div className="mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <h3 className="ml-8 py-4 mt-4 font-poppins font-semibold">Our Cities</h3>
            <div className="ml-4 py-4 gap-x-16 flex w-[500px] flex-wrap justify-around">

              {cities.map((city) => (
                <div key={city.name} className="w-[70px] my-2 ">
                  <a
                    href={city.href}
                    className={'font-poppins text-gray-700 block px-4 py-2 text-sm'
                    }
                  >
                    {city.name}
                  </a>
              </div>
                ))}
            </div>
        </div>
    </section>)
}

export default SearchModal
