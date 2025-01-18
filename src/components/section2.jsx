import React, { useEffect, useRef } from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function section2() {

  const imgrefs = useRef([])

  const centerImg = useRef(null)

  const rightImg = useRef(null)

  const leftImg = useRef(null)

  const bottomImg = useRef(null)

  const imgs = [
    {
      img: img1,
      width: 230,
      position: 'left-10 top-0',
      aspect: '6/4'

    },
    {
      img: img5,
      width: 220,
      position: 'right-14 top-0',
      aspect: '4/5'
    },
    {
      img: img2,
      height: 280,
      position: 'left-5 bottom-8',
      aspect: '4/5'
    }
  ]

  const containerref = useRef(null)

  useEffect(() => {
    const container = containerref.current

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 90%',
          end: 'bottom 80%',
          scrub: 1,
        }
      })
        .from(leftImg.current, { top: '20%', left: '20%',ease: 'none' },0)
        .from(rightImg.current, { top: '20%', right: '20%',ease: 'none' }, 0)
        .from(bottomImg.current, { left: '7%',ease: 'none' }, 0)
        .from(centerImg.current, { scale: 0.5, ease: 'none' }, 0)
          
    })

    return () => ctx.revert()

  }, [])

  return (
    <div className='h-[90vh] w-full bg-white px-3' ref={containerref}>

      <div className='h-full w-full flex flex-col justify-end items-center relative'>


        <div ref={leftImg} className='overflow-hidden absolute top-0 left-10'>

          <img src={img1} alt="" className='w-[230px] aspect-[6/4] object-cover' />

        </div>

        <div ref={rightImg} className='overflow-hidden absolute top-0 right-14'>

          <img src={img5} alt="" className='w-[220px] aspect-[4/5] object-cover' />

        </div>

        <div ref={centerImg} className='overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

          <img src={img3} alt="" className='h-[250px] aspect-square object-cover' />

        </div>

        <div ref={bottomImg} className='overflow-hidden absolute bottom-8 left-5'>

          <img src={img2} alt="" className='h-[280px] aspect-[4/5] object-cover' />

        </div>

        <div className='overflow-hidden absolute right-0 bottom-6'>

          <img src={img4} alt="" className='h-[180px] aspect-[16/10] object-cover' />

        </div>

        <div className='w-full flex justify-center py-5'>
          <div className='flex flex-col justify-center items-center gap-3'>
            <h2 className='tracking-tighter text-3xl font-extralight text-[#f34848]'>(01)</h2>
            <p className='uppercase menu-font text-xs text-center text-black font-medium'>Disclaimer: May Cause Brand <br /> Awareness</p>
          </div>
        </div>

      </div>

    </div>

  )
}

export default section2