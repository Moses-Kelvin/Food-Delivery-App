import Image from 'next/image';
import React from 'react';
import dude from "../../assets/Images/image-victor-glover.png";
import { MdLocationOn } from 'react-icons/md';

const Testimonial = () => {
    return (
        <div className="w-64 sm:w-4/5">
            <div className="flex items-center mb-4 w-full">
                <div className="flex-1 bg-bodyBlue shadow-lg text-black p-2 rounded-xl mb-2 relative">
                        <p className="p-2">Far away, behid the world mountains, far from the countries volkalie and consonantia, there live the blind texts. Separated they live in Bookmark groove right at the coast of the semantics, a large language ocean.</p>
                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-bodyBlue"></div>
                </div>
            </div>
            <div className="flex gap-x-5">
                <Image src={dude} alt='' className="rounded-full w-12 h-12"/>
                <div>
                    <h2 className="font-bold">John Dalton</h2>
                    <div className="flex gap-x-1 items-center">
                    <MdLocationOn size={18} />
                    <p>Lagos, Nigeria.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;