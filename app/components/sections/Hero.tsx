import { ArrowRight } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { AnimatedHeadline } from '../AnimatedHeadline'
import headshot from '../../../public/selena_headshot.jpg'

const Hero = () => {
  return (
    <div className="my-8 lg:my-20">
      <div className="m-2 relative lg:h-[74vh] my-4 rounded-4xl bg-indigo-50 overflow-hidden lg:mx-32">
      
      {/* Clip path dent */}
      <div className="absolute bottom-0 left-0 h-20 w-36 bg-white z-10 rounded-tl-4xl rounded-br-4xl" />

      {/* Button positioned in dent */}
      <div className="absolute bottom-4 left-4 z-20">
          <button className="z-20 rounded-full gap-2 bg-rose-100 p-3 px-4 text-gray-500 hover:text-red-500 tracking-wide font-thin text-md shadow-2xl hover:bg-rose-100 transition-all items-center">
            Projects 
            <ArrowRight className="inline" size={20} />
          </button>
      </div>

      {/* Grid content */}
      <div className="justify-center lg:justify-start lg:py-4 lg:grid lg:grid-cols-2 items-center h-full">
        <div className="m-4">
          <AnimatedHeadline />
        </div>

        {/* Headshot Image */}
        <div className="mx-4 flex justify-end">
          <Image
            src={headshot}
            width={550}
            height={600}
            alt="Selena Siri Headshot Img"
            className="rounded-3xl rounded-b-3xl object-cover lg:max-h-[746px]"
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
