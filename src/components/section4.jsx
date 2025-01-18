import React, { useEffect, useRef } from 'react'
import man from '../assets/man.jpg';
import icecream from '../assets/icecream.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function section4() {

  const iceImg = useRef(null)
  const containerRef = useRef(null)
  const txt = useRef(null)
  const heading = useRef([])



  useEffect(() => {

    const container = containerRef.current

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        }
      })

      tl.to(iceImg.current, {
        y: 200,
      })

      gsap.from(txt.current, {
        scrollTrigger: {
          trigger: container,
          start: 'top 10%',
          end: 'top 5%',
        },
        opacity: 0,
        y: 50
      })

      heading.current.forEach((letter, index) => {
        gsap.from(letter, {
          y: '-100%',
          opacity: 0,
          duration: 0.7,
          rotate: -6,
          ease: 'power4.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: container,
            start: 'top 20%',
            end: 'top 5%',
          }
        }, index * 0.1)
      })

    })

    return () => ctx.revert()

  }, [])




  return (
    <div className='bg-white h-[150vh] w-full flex relative' ref={containerRef}>

      <div className='w-[42%] h-full flex items-center justify-center'>

        <div className='w-2/5 h-full flex flex-col justify-center items-start gap-10'>

          <p className='font-bold menu-font uppercase text-xs text-black'>services</p>

          <div className='overflow-hidden space-x-2'>{
            'what we do'.split(' ').map((letter, index) => (
              <span key={index} className='inline-block hero-font-small text-7xl uppercase text-black rotate-0' ref={el => heading.current[index] = el}>{letter !== ' ' ? letter : '\u00A0'}</span>
            ))
          }</div>

          <p className='menu-font pr-5 text-black text-[14px]' ref={txt}>Our mission is to empower the brands we believe in with tailor-made approaches that ignite creativity and growth without limits.</p>

        </div>

      </div>

      <div className='absolute left-[41%] top-[35%] z-[1] -translate-x-[40%]' ref={iceImg}>

        <img src={icecream} alt="" className='aspect-video h-[120px] object-cover' />

      </div>

      <span className='absolute left-[41%] top-[30%] text-textred z-[1] text-4xl -translate-x-2'>(02)</span>

      <div className='w-[58%] h-full relative'>

        <div className='absolute inset-0 h-full w-full overflow-hidden z-0'>

          <img src={man} alt="" className='h-[115%] w-full object-cover' />

        </div>

      </div>

    </div>
  )
}

export default section4