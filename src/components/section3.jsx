import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import bg from '../assets/bg.jpg'
import TextanimateSmall from './textanimateSmall';

function section3() {

    const txt1 = 'we envision, craft, and execute groundbreaking communication strategies.'

    const txt2 = 'We redefine the conventional norms of PR, offering a fresh, forward-thinking perspective as your agency partner.'

    const txt3 = 'We pride ourselves on delivering high-quality, result-driven campaigns that authentically connect with audiences and drive business success.'

    useEffect(() => {
        // Initialize the GSAP animation for the parallax effect
        gsap.to('.bg', {
            scrollTrigger: {
                trigger: '.bg',  // Trigger based on the image itself
                start: 'top bottom',  // Start when the image reaches the bottom of the viewport
                end: 'bottom top',    // End when the image reaches the top of the viewport
                scrub: true,          // Smooth scroll effect
                // markers: true,       // Optional: Set to true to see the trigger points
            },
            y: '10%',               // Move the background image down by 30% as the user scrolls
            ease: 'none',           // No easing, making the movement constant
        });
    }, []);

    return (
        <>
            <div className='min-h-[125vh] w-full relative overflow-hidden'>
                <div className='h-full w-full absolute inset-0 z-[0] pointer-events-none'>
                    <img src={bg} alt="" className='h-[120%] w-full bg object-cover object-center -translate-y-32' />
                </div>
                <div className='h-full w-full flex '>

                    <div className='w-1/2 h-[125vh] z-10 flex flex-col p-4 justify-between'>

                        <h1 className='uppercase text-textred hero-font leading-[0.8]'>where <br /> influence</h1>

                        <div className=' uppercase w-1/3 font-medium'>
                            <TextanimateSmall text={txt1} />
                        </div>

                        <h1 className='uppercase text-textred hero-font leading-[0.8]'>intersect</h1>

                    </div>

                    <div className='w-1/2 h-[125vh] z-10 flex flex-col py-4'>

                        <div className='h-1/2 w-full flex justify-center'>

                            <div className=' uppercase w-1/3 font-medium'>
                                <TextanimateSmall text={txt2} />
                            </div>

                        </div>

                        <div className='h-1/2 w-full flex flex-col items-center justify-end gap-10 '>

                            <h1 className='uppercase text-textred hero-font leading-[0.8] w-1/3'>and <br /> impact</h1>

                            <div className=' uppercase w-1/3 font-medium'>
                                <TextanimateSmall text={txt3} />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default section3