import styles from '../style';
import { badge } from './index';
import SearchButton from './SearchButton';

const Search = () => (
    <div className="sm:pl-16 px-6 flex flex-wrap">
        <div className="relative -top-10 bg-tertiary rounded-2xl flex flex-column w-fit">
            <div className="px-6 py-6">
                <p className="text-white mb-7">Find the best solution for you, your close-to-school home is waiting</p>
                <div className="flex flex-wrap my-4">
                    <span className="border rounded-full hidden ss:flex justify-center bg-white px-3 py-2"><img className="" src={badge} alt="stucamp logo" /></span>
                    <span className="ml-4"><SearchButton /></span>
                </div>
            </div>
        </div>
        <div className="my-8 lg:ml-14">
            <h3 className="text-primary font-poppins font-semibold text-[28px]">Over 30 student accomodation sites</h3>
        </div>
    </div>
)

export default Search;
