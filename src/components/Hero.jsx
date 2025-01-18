import img from '../assets/heroimg.jpg'
import React, { useRef, useLayoutEffect } from 'react'
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextAnimate from './textanimate1';

gsap.registerPlugin(ScrollTrigger)

function Hero() {

    const imgRef = useRef(null)
    const textref1 = useRef(null)
    const textref2 = useRef(null)
    const nxtheroref = useRef(null)

    const richText = "We narrate the distinctive and captivating stories of some of the world's most desirable brands. Our specialties include public relations, social media management, content creation, and brand partnerships, enabling us to link our clients with leading influencers, media outlets and their target audiences."

    const containerRef = useRef(null);

    const text1ref = useRef(null)

    const gen = useRef(null)

    const com = useRef(null)

    const agen = useRef(null)

    useLayoutEffect(() => {
        gsap.fromTo(imgRef.current, { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }, { clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', ease: 'power2.out', duration: 1, delay: 0.5 })

        const arr = Array.from(text1ref.current.children);



        const container = nxtheroref.current;
        const calculateScale = () => {
            if (!imgRef.current) return 1;
            const imageWidth = imgRef.current.offsetWidth;
            const imageHeight = imgRef.current.offsetHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            const scaleX = windowWidth / imageWidth;
            const scaleY = windowHeight / imageHeight;

            return Math.max(scaleX, scaleY);
        };

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: 'top 36%',
                    end: `+=${containerRef.current.offsetHeight - 75}`,
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    invalidateOnRefresh: true,
                }
            });

            tl.to(imgRef.current, {
                scale: calculateScale(),
                ease: 'none',
            }, 0)
                .to(textref1.current, {
                    opacity: 0,
                    x: -150,
                    ease: 'none',
                }, 0)
                .to(textref2.current, {
                    opacity: 0,
                    x: 200,
                    ease: 'none'
                }, 0)
                .to(container, {
                    backgroundColor: 'white',
                    ease: 'none',

                })

        }, containerRef);

        const ctx2 = gsap.context(() => {

            gsap.set([gen.current, com.current, agen.current, ...arr], {
                willChange: "transform",
            });


            const gtl = gsap.timeline({
                ease: "power2.out",
                defaults: {
                    duration: 1,
                    ease: "power2.out"
                }
            });

            gtl.from([gen.current, com.current], {
                y: (i) => [100, -100][i],
                rotation: (i) => [6, -6][i],
            }, 0)

            arr.forEach((el, i) => {

                gtl.from(el, {
                    y: '100%',
                    rotate: 6,
                    delay: i * 0.04,
                    duration: 1.2,
                }, i * 0.05)
            })

            gtl.from(agen.current, {
                y: '-100%',
                rotate: -6,
                duration: 1.2,
            }, 0.2)

            
        })

        // Cleanup
        return () => {
            ctx.revert()
            ctx2.revert()
        };
    }, []);

    return (
        <div className='w-full flex  justify-center items-center flex-col overflow-hidden'>

            <div className='min-h-screen w-full flex items-center justify-center relative' ref={containerRef}>

                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20  h-auto aspect-[15/9] w-[280px] overflow-hidden`} ref={imgRef}>

                    <img src={img} alt="" className='h-[120%] w-full object-center object-cover' />

                </div>

                <div className='w-full flex items-center flex-col justify-center uppercase gap-0'>

                    <div ref={text1ref} className='overflow-hidden   leading-none'>

                        <span className='inline-block canela pr-3 rotate-0 '>a</span>
                        <span className='inline-block canela  rotate-0'>new</span>

                    </div>

                    <div className=' overflow-hidden mb-2 -m-8 z-10 '>

                        <span className='inline-block canela bg-[#1d2120]  leading-[0.9] origin-bottom-left' ref={gen}>generation</span>

                    </div>


                    <div className='overflow-hidden z-10 -mt-8'>

                        <span className='inline-block hero-font font-bold antialiased  bg-[#1d2120] rotate-0 leading-[9rem] origin-top-left' ref={com}>communications</span>

                    </div>

                    <div className='overflow-hidden leading-none -m-1'>

                        <span className='inline-block hero-font font-bold leading-[0.8] ' ref={agen}>agency</span>

                    </div>

                </div>

                <div className='flex absolute bottom-0 items-center justify-between uppercase text-xs font-medium w-full px-14 text-white text-center py-8 tracking-tight menu-font'>

                    <div ref={textref1}>we strategically connect <br /> brands with audiences</div>

                    <div ref={textref2}>who provoke, inspire and <br /> convert</div>

                </div>
            </div>
            <div className='h-screen w-full flex items-end'>
                <div className='h-32 w-full bg-white'></div>
            </div>

            <div className='w-full flex py-10 flex-col items-center ' ref={nxtheroref}>

                <TextAnimate text={richText} />



            </div>
        </div>
    )
}

export default Hero