import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Navbar = () => {
  return (
    <Fragment>
      <nav className='mt-[92px] lg:mt-[35px] w-full static z-20'>
        <div className='x-container flex justify-center lg:justify-start items-center lg:items-start mx-auto relative'>
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
          <Image
            className='lg:hidden absolute right-[-10px]'
            src='/img/menu.svg'
            width={20}
            height={12}
            alt='Menu'
          />
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
