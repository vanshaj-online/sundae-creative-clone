import logo from '../assets/logo.png'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MenuAnimation from './menuAnimation'
import img from '../assets/menuimg.jpg'

gsap.registerPlugin(ScrollTrigger)

function Navbar() {
  const imgref = useRef(null)

  const slidemenu = useRef(null)
  const demo = useRef(null)
  const btn = useRef(null)
  const menu = useRef(null)
  const close = useRef(null)
  const talk = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))
  const customCursor = useRef(null)
  const [isHover, setIsHover] = useState(null)


  const links = [
    {
      text: 'integrated',
      text2: 'communications'
    },
    {
      text: 'influencer marketing'
    },
    {
      text: 'public relations'
    },
    {
      text: 'social media'
    },
    {
      text: 'event planning &',
      text2: 'production'
    },

  ]


  const navlinks = ['work', 'about us', "let's talk"]

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.set(slidemenu.current, { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' })

      tl.current.fromTo(menu.current, { y: '0%' }, { y: '100%' }, 0)

      tl.current.fromTo(close.current, { y: '0%' }, { y: '100%' }, 0)

      tl.current.fromTo(talk.current, { y: '0%' }, { y: '100%' }, 0)

      tl.current.fromTo(slidemenu.current, { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, 0)

      tl.current.fromTo(imgref.current, { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }, { clipPath: 'polygon(0 0, 100% 0, 99% 100%, 0 100%)', duration: 0.5, delay: 0.1 }, 0)

    })

    return () => {
      ctx.revert()
    }


  }, [])

  useEffect(() => {
    const container = slidemenu.current

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
    })

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      ctx.revert()
    }
  }, [isHover])





  return (
    <div className='h-14 w-full flex justify-between items-center px-4 fixed top-0 z-50'>

      <div className='h-screen w-full fixed inset-0 bg-[#1d2120] origin-top flex items-center justify-between' ref={slidemenu}
        onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
      >

        <span className='border border-textred h-16 w-16 rounded-full items-center justify-center fixed inline-flex top-0 z-[50] opacity-0 pointer-events-none' ref={customCursor}>

          <span className='h-2 w-2 bg-textred rounded-full'></span>

        </span>

        <div className='w-[45%] h-full flex flex-col justify-end items-center px-4'>

          <div className='w-full py-4 h-[380px] origin-left' ref={imgref} >

            <img src={img} className='h-[380px] w-full object-center origin-center bg-fixed' alt="" />

          </div>

          <div className='flex justify-end w-full py-3'>

            <div className='min-w-[40%]' ref={demo}>

              {
                navlinks.map((link, index) => (
                  <MenuAnimation key={index} text={link} />
                ))
              }

            </div>

            <div className='min-w-[60%] flex items-end pl-10 pb-1'>

              <div className='flex justify-between w-full h-max'>

                <span className='menu-font uppercase text-white cursor-pointer'>fr</span>

                <div className='space-x-6'>

                  <span className='menu-font uppercase text-white font-light cursor-pointer'>instagram</span>

                  <span className='menu-font uppercase text-white font-light cursor-pointer'>linkedin</span>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className='w-1/2 h-full flex flex-col gap-1 pt-16 pl-12'>

          {

            links.map((link, index) => (

              <MenuAnimation key={index} text={link.text} text2={link.text2} index={index} className='justify-between' timeline={tl} />

            ))

          }

        </div>

      </div>

      <button className=' uppercase menu-font text-xs text-white' ref={btn}>
        <div className='relative flex flex-col overflow-hidden text-gray-500 font-semibold'>

          <span className='absolute inline-block top-0 left-0 font-medium' ref={menu} onClick={() => {
            tl.current.play()

          }}>menu</span>

          <span className='absolute inline-block -top-full left-0 font-medium' ref={close} onClick={() => {
            tl.current.timeScale(1.2).reverse()

          }}>close</span>

          <span className=' invisible'>close</span>
        </div>
      </button>

      <div className='menu-font uppercase text-xs font-semibold tracking-wide'>

        <img src={logo} alt="" className='w-[120px] h-auto mix-blend-difference' />

      </div>

      <div className='menu-font uppercase text-xs font-semibold tracking-wide z-10 overflow-hidden text-gray-500' >
        <span ref={talk} className='inline-block'>let's talk</span>
      </div>

    </div>
  )
}

export default Navbar