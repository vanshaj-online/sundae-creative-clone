import React, { useEffect, useRef, useState } from 'react'
import ServiceCard from './serviceCard.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function services() {

    const customCursor = useRef(null)
    const containerRef = useRef(null)

    const service = [
        {
            titleOne: 'integrated',
            titleTwo: 'communications',
        },
        {
            titleOne: 'influencer',
            titleTwo: 'marketing',
        },
        {
            titleOne: 'public',
            titleTwo: 'relations',
        },
        {
            titleOne: 'social',
            titleTwo: 'media',
        },
        {
            titleOne: 'event',
            titleTwo: 'planning &',
            titleThree: 'production',
        }
    ]

    const [isHover, setIsHover] = useState(null)


    useEffect(() => {

        const container = containerRef.current

        const handleMouseMove = (e) => {


            gsap.to(customCursor.current, {
                x: e.clientX - 48,
                y: e.clientY - 32,
                ease: 'power4.out',
                duration: 0.6,
                delay: 0.1
            })

        };

        container.addEventListener('mousemove', handleMouseMove)


        const ctx = gsap.context(() => {
            if (isHover) {
                gsap.to(customCursor.current, {
                    opacity: 1,
                    duration: 0.2,
                });
            } else {
                gsap.to(customCursor.current, {
                    opacity: 0,
                    duration: 0.2,
                });
            }
        });

        return () => {
            container.removeEventListener('mousemove', handleMouseMove)
            ctx.revert()
        }

    }, [isHover])

    return (
        <div className=' w-full bg-white mt-40 px-4 relative' ref={containerRef} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>

            <span className='border border-textred h-16 w-16 rounded-full items-center justify-center fixed inline-flex top-0 z-[50] opacity-0 pointer-events-none' ref={customCursor}>

                <span className='h-2 w-2 bg-textred rounded-full'></span>

            </span>

            {
                service.map((item, index) => {
                    return (
                        <ServiceCard key={index} titleOne={item.titleOne} titleTwo={item.titleTwo} title3={item.titleThree} index={index} />
                    )
                })
            }
        </div>
    )
}

export default services