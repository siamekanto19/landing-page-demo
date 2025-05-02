import Image from 'next/image'
import React from 'react'
import {} from '@tabler/icons-react'

const HeroSection = () => {
  return (
    <section className='flex flex-col-reverse lg:flex-row container mx-auto relative h-[calc(100vh-155px)]'>
      <div className='w-full lg:w-[60%] lg:mt-[57px] static z-20'>
        <h1 className='font-bold text-[35px] text-white font-urbanist'>
          Want to Turn Social Media Into a<br /> Profitable Career?
        </h1>
        <h2 className='font-bold text-[35px] font-urbanist text-[#00E7F9] text-shadow-custom'>
          Discover your way to success <br /> with Fametonic:
        </h2>
        <ul className='pt-4 flex flex-col gap-[13px] text-base font-semibold text-white'>
          <li className='flex items-start gap-2.5'>
            <span>✨</span>
            <p>Start growing your influence right away—no waiting required!</p>
          </li>
          <li className='flex items-start gap-2.5'>
            <span>✨</span>
            <p>
              Create viral TikToks and Reels step by step with easy-to-follow
              lessons
            </p>
          </li>
          <li className='flex items-start gap-2.5'>
            <span>✨</span>
            <p>Use a Personal AI Worker to boost your content</p>
          </li>
          <li className='flex items-start gap-2.5'>
            <span>✨</span>
            <p>
              Learn from expert-led courses designed for aspiring influencers
            </p>
          </li>
        </ul>
        <div className='flex flex-col lg:w-[313px] text-center'>
          <button className='w-full lg:w-[313px] mt-[30px] h-10 rounded-[8px] bg-[rgba(252,0,78,1)] flex items-center justify-center uppercase button-shadow text-white text-xl font-bold gap-4'>
            GET STARTED
            <Image
              src='/img/chevron-right.svg'
              width={9}
              height={6}
              alt='Chevron'
            />
          </button>
          <p className='pt-[10px] text-sm'>
            1-minute quiz for personalized Insights
          </p>
        </div>
        <div className='pt-[30px]'>
          <p className='text-muted-foreground font-medium'>
            By clicking "Get Started", you agree with Terms and Conditions,
            <br />
            Privacy Policy, Subscription Terms
          </p>
          <p className='pt-[12px] text-[10px] text-muted-foreground font-medium'>
            Fametonic 2025 ©All Rights Reserved.
          </p>
        </div>
      </div>
      <div className='w-full lg:w-[70%] h-full absolute right-0 top-0 z-10'>
        <img
          className='w-full h-full object-cover'
          src='/img/hero.png'
          alt='Hero'
        />
      </div>
    </section>
  )
}

export default HeroSection
