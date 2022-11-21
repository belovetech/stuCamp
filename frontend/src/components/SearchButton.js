import { search } from './index.js';

const SearchButton = () => (
    <button className="flex bg-white text-tertiary rounded-3xl px-8 py-2">
        <p className="font-poppins ">Search by city, school or building <span><img className="inline" src={search} alt="search icon" /></span></p>
    </button>
)

export default SearchButton
