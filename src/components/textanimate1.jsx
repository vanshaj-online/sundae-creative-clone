import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TextAnimate({ text }) {
  const textRef = useRef(null);
  const wordRef = useRef([]);
  const btn = useRef(null);
  const txt1 = useRef(null);
  const txt2 = useRef(null);

  const words = text.split(' ');

  useEffect(() => {

    const container = textRef.current;

    // Clear existing content
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'center 50%',
          toggleActions: 'play none none reverse',
          scrub: 1,
        }
      });

      // Add animations to timeline
      wordRef.current.forEach((word, i) => {
        tl.to(word, {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: [0.215, 0.61, 0.355, 1]
        }, i * 0.01)
      });

      gsap.fromTo(btn.current, { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: container,
            start: 'bottom 80%',
            end: 'center 50%',
            toggleActions: 'play none none reverse',
            scrub: 1,
            // markers: true
          }
        }
      );

    }, container); // Scope to container

    // Cleanup
    return () => ctx.revert();

  }, [text]);

  return (
    <div className='w-full flex items-center justify-center flex-col bg-white'>

      <div className="text-[3.4rem] leading-none uppercase text-black text-center w-4/5 mb-12" ref={textRef}>
        {
          words.map((word, i) => (
            <div className='overflow-hidden inline-block pr-2' key={i}>
              <span ref={el => wordRef.current[i] = el} key={i} className='inline-block -translate-y-full origin-bottom-left opacity-0 -rotate-6'>{word !== ' ' ? word : '\u00A0'} </span>
            </div>
          ))
        }

      </div>

      <button className='bg-[#1d2120] uppercase menu-font font-normal tracking-tight w-max py-4 px-8 text-xs text-white btn' ref={btn} onMouseEnter={() => {

        gsap.to(txt1.current, { y: '100%', ease: 'none', duration: 0.3 })

        gsap.to(txt2.current, { y: '100%', ease: 'none', duration: 0.3 })

      }} onMouseLeave={() => {
        
        gsap.to(txt1.current, { y: '-100%', ease: 'none', duration: 0.3 })

        gsap.to(txt2.current, { y: 0, ease: 'none', duration: 0.3 })

      }}>
        <div className='relative flex flex-col overflow-hidden'>
          <span className='absolute inline-block -top-full left-0' ref={txt1}>about us</span>
          <span className='absolute inline-block top-0 left-0' ref={txt2}>about us</span>
          <span className='text-[#1d2120] invisible'>about us</span>
        </div>
      </button>
    </div>
  );
}

export default TextAnimate;