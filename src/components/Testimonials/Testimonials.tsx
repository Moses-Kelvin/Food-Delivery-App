import React from 'react';
import Testimonial from './Testimonial';

const Testimonials: React.FC = () => {
    return (
        <section className="w-full bg-lightBlue pb-12 my-24">
            <h1 className="font-lighter text-5xl text-center tracking-wider px-2 py-6 text-deepRed sm:text-4xl">WHAT PEOPLE SAYS...</h1>
            <div className="grid grid-cols-4 justify-items-center py-8 sm:grid-cols-1 sm:gap-y-8">
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </div>
        </section>
    )
}

export default Testimonials;