import Image from 'next/image'
import React, { Fragment } from 'react'

const HeroSection = () => {
  return (
    <Fragment>
      <div className='x-container'>
        <img
          className='lg:hidden static z-10 -mt-[80px]'
          src='/img/hero.png'
          alt='Hero'
        />
      </div>
      <section className='flex flex-col-reverse lg:flex-row x-container mx-auto relative lg:h-[calc(100vh-155px)] -mt-[90px] lg:-mt-0'>
        <div className='w-full lg:w-[60%] lg:mt-[57px] static z-20'>
          <h1 className='font-extrabold lg:font-bold text-[25px] lg:text-[35px] text-white font-urbanist text-center lg:text-left hidden lg:block'>
            Want to Turn Social Media Into a <br /> Profitable Career?
          </h1>
          <h1 className='font-extrabold lg:font-bold text-[25px] lg:text-[35px] text-white font-urbanist text-center lg:text-left lg:hidden'>
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          <h2 className='font-extrabold lg:font-bold text-[25px] lg:text-[35px] font-urbanist text-[#00E7F9] text-shadow-custom text-center lg:text-left'>
            Discover your way to success <br /> with Fametonic:
          </h2>
          <ul className='pt-[22px] lg:pt-4 flex flex-col gap-[13px] text-base font-medium lg:font-semibold text-white lg:w-[70%]'>
            <li className='flex items-start gap-2.5'>
              <span>✨</span>
              <p>
                Start growing your influence right away—no waiting required!
              </p>
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
          <div className='pt-[22px] pb-[32px] lg:hidden text-center'>
            <p className='text-muted-foreground font-medium text-xs'>
              By clicking "Get Started", you agree with Terms and Conditions,
              <br />
              Privacy Policy, Subscription Terms
            </p>
            <p className='pt-[12px] text-[10px] text-muted-foreground font-medium'>
              Fametonic 2025 ©All Rights Reserved.
            </p>
          </div>
          <div className='flex flex-col lg:w-[313px] text-center'>
            <button className='w-full lg:w-[313px] mt-[30px] h-10 rounded-[8px] bg-[rgba(252,0,78,1)] flex items-center justify-center uppercase button-shadow text-white text-xl font-bold gap-2'>
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
          <div className='hidden lg:block pt-[30px]'>
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
        <div className='absolute top-0 right-0 w-[666px] h-[679px]'>
          <div className='relative w-[666px] h-[679px] hidden lg:block'>
            <Image src='/img/hero.png' fill alt='Hero' objectFit='cover' />
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default HeroSection
