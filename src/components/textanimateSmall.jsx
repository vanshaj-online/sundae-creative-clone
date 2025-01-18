import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function textanimateSmall({ text }) {

  const textRef = useRef(null);
  const wordRef = useRef([]);

  const words = text.split(' ');

  useEffect(() => {

    const container = textRef.current;

    // Clear existing content
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'top 80%',
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
        }, i * 0.1)
      });

      

    }, container); // Scope to container

    // Cleanup
    return () => ctx.revert();

  }, [text]);

  return (
    <div className="text-xs leading-none uppercase text-textred text-left mb-12" ref={textRef}>
      {
        words.map((word, i) => (
          <div className='overflow-hidden inline-block pr-2' key={i}>
            <span ref={el => wordRef.current[i] = el} key={i} className='inline-block -translate-y-full origin-bottom-left opacity-0 -rotate-6 menu-font'>{word !== ' ' ? word : '\u00A0'} </span>
          </div>
        ))
      }

    </div>
  )
}

export default textanimateSmall