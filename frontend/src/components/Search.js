import { useState } from 'react';
import { badge } from './index';
import SearchButton from './SearchButton';
import { OverlayProvider, usePreventScroll } from 'react-aria';
import Button from './Button'
import HeadlessSlideOver from './HeadlessSlideOver';
import SearchModal from './SearchModal';

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOnClose = () => setIsOpen(false);

    usePreventScroll({ isDisabled: !isOpen });
    return (
        <OverlayProvider>
    <div className="sm:pl-16 px-6 flex flex-wrap">
        <div className="relative -top-10 bg-tertiary rounded-2xl flex flex-column w-fit">
            <div className="px-6 py-6">
                <p className="text-white mb-7">Find the best solutions for you, your close-to-school home is waiting</p>
                <div className="flex flex-wrap my-4">
                    <span className="border rounded-full hidden ss:flex justify-center bg-white px-3 py-2"><img className="" src={badge} alt="stucamp logo" /></span>
                    <span className="ml-4" onClick={() => setOpen(true)}><SearchButton /></span>
                </div>
            </div>
        </div>
        <div className="my-8 lg:ml-14">
            <h3 className="text-primary font-poppins font-semibold text-[28px]">Over 30 student accomodation sites</h3>
        </div>
        <HeadlessSlideOver
        open={open}
        setOpen={setOpen}
        title="StuCamp Accomodation Finder"
        >
        <div className="flex flex-col">
            <SearchModal />
            <Button
            className="mt-4"
            onClick={() => setOpen(false)}
            >
            OK
            </Button>
        </div>
        </HeadlessSlideOver>
    </div>
    </OverlayProvider>
)}

export default Search;
