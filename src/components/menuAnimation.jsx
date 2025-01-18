import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


function menuAnimation({ text, text2, index = '', className, isOpen, timeline }) {


  const hiddenTxt = useRef([])
  const txt = useRef([])
  const hiddenTxt2ref = useRef(null)
  const txt2ref = useRef(null)
  const btnref = useRef(null)
  const num = useRef(null)
  const hiddennum = useRef(null)

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({ paused: true });


      hiddenTxt.current.forEach((el, index) => {
        if (timeline) {
          timeline.current.fromTo([txt.current[index], txt2ref.current, num.current], { y: '-100%', rotate: -5 }, { y: 0, rotate: 0, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }, 0)
        }
        if (el) {
          tl.fromTo([el,hiddenTxt2ref.current,hiddennum.current], { y: '-50%', rotate: -8 },
            { y: '100%', rotate: 0, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }, 0);
          tl.fromTo([txt.current[index],txt2ref.current,num.current], { y: '0%', rotate: 0 },
            { y: '100%', rotate: 4, duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }, '<');
        }
      });


      const btn = btnref.current;
      if (btn) {
        btn.addEventListener('mouseenter', () => tl.play());
        btn.addEventListener('mouseleave', () => tl.timeScale(1.5).reverse());
      }

      return () => {
        if (btn) {
          btn.removeEventListener('mouseenter', () => tl.play());
          btn.removeEventListener('mouseleave', () => tl.timeScale(1.5).reverse());
        }
      };
    });

    return () => ctx.revert();
  }, [isOpen]);


  return (
    <div className={`flex items-end w-full justify-between ${className}`} >

      {
        index !== '' &&
        <div className='relative overflow-hidden'>

          <span className='inline-block text-[2rem] font-medium absolute -top-full left-0 text-textred ' ref={hiddennum}>{`(00${index + 1})`}</span>

          <span className='inline-block text-[2rem] font-medium text-white' ref={num}>{`(00${index + 1})`}</span>

        </div>
      }

      <div className='cursor-pointer' ref={btnref} >

        <div className='overflow-hidden relative flex justify-end gap-2 pr-4'>

          {text.split(' ').map((word, index) => (

            <div className='' key={index}>

              <span className={`inline-block uppercase absolute text-[4.8rem] leading-none hero-font-small -top-full  text-textred z-10 will-change-transform`} ref={el => hiddenTxt.current[index] = el}>{word}</span>

              <span className='inline-block uppercase text-white text-[4.8rem] leading-none hero-font-small will-change-transform' ref={el => txt.current[index] = el}>{word}</span>

            </div>

          ))}


        </div>

        {
          text2 &&
          <div className='overflow-hidden relative flex justify-end px-2'>

            <span className='inline-block uppercase absolute text-[4.8rem] leading-none hero-font-small -top-full right-2 text-textred z-10 will-change-transform' ref={hiddenTxt2ref}>{text2}</span>

            <span className='inline-block uppercase text-white text-[4.8rem] leading-none hero-font-small will-change-transform' ref={txt2ref}>{text2}</span>

          </div>
        }

      </div>

    </div>
  )
}

export default menuAnimation