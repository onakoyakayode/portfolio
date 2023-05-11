import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px]'>
      <div className='w-full border border-zinc-500 mb-10'></div>
      <div className='flex items-end justify-between w-full px-3 md:px-[20px] lg:px-[50px]'>
        <div className='flex flex-col items-start gap-6 md:gap-10'>
            <h1 className="text-[20px] md:text-[24px] lg:text-[30px]">LET&apos;S CONNECT</h1>
            <ul className='flex items-center gap-3 md:gap-5 text-[#8492a6]'>
                <Link target='_blank' className='cursor-pointer text-[12px] md:text-[14px] lg:text-[15px] hover:text-[#25D366] ease-in-out duration-150' href='https://wa.link/0k4ks7'>Whatsapp</Link>
                <Link target='_blank' className='cursor-pointer text-[12px] md:text-[14px] lg:text-[15px] hover:text-[#1DA1F2] ease-in-out duration-150' href='https://twitter.com/kayodeonakoya26'>Twitter</Link>
                <Link target='_blank' className='cursor-pointer text-[12px] md:text-[14px] lg:text-[15px] hover:text-[#cc2366] ease-in-out duration-150' href='https://www.instagram.com/onakoya_kayode'>Instagram</Link>
            </ul>
        </div>
        <div>
            <p className='text-[11px] md:text-[12px] lg:text-[13px]'>Developed by <Link href='https://github.com/onakoyakayode' className='text-[#f26e49] text-[14px] md:text-[18px] lg:text[22px] hover:underline'>Onakoya Kayode</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
