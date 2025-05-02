import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='mt-[16px] lg:mt-[35px] w-full static z-20'>
      <div className='container flex justify-center lg:justify-start items-start mx-auto'>
        <Image
          src='/img/logo.svg'
          width={107.78}
          height={46.07}
          alt='Logo'
          className='lg:hidden'
        />
        <Image
          src='/img/logo.svg'
          width={173.12}
          height={74}
          alt='Logo'
          className='hidden lg:block'
        />
        <div className='hidden lg:flex ml-auto items-center gap-10'>
          <Link className='ml-auto' href='#'>
            <p className='text-lg font-semibold text-muted-foreground'>
              About us
            </p>
          </Link>
          <Link className='ml-auto' href='#'>
            <p className='text-lg font-semibold text-muted-foreground'>
              Contact
            </p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
