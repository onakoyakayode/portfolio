import React from 'react'
import Image from 'next/image'
import myPic from '../../../public/images/programming.svg'
import HTML from '../../../public/icons/html-5.svg'
import CSS from '../../../public/icons/css3.svg'
import JS from '../../../public/icons/javascript.svg'
import TS from '../../../public/icons/typescript.svg'
import react from '../../../public/icons/react-native.svg'
import Python from '../../../public/icons/python.svg'
import Git from '../../../public/icons/github.svg'
import Figma from '../../../public/icons/figma.svg'




const About = () => {
  return (
    <div id='about' className='flex flex-col items-center px-3 md:px-[20px] lg:px-[50px] py-[60px] md:py-[70px] lg:py-[80px] xl:py-[100px]'>
      <h1 className='text-center text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] mb-8 md:mb-12 lg:mb-20'>Meet Me</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-between text-xs lg:text-sm'>
        <div className='w-full'>
            <p className='my-1 md:my-2 lg:my-5 leading-6'>Hello there! My name is Onakoya Oluwakayode and I am constantly evolving.</p>
            <p className='my-1 md:my-2 lg:my-5 leading-6'>I am a frontend engineer with a passion for exploring the full potential of blockchain technology. My long-term goal is to become a skilled and knowledgeable blockchain engineer.</p>
            <p className='my-1 md:my-2 lg:my-5 leading-6'>I specialize in designing and developing visually appealing, intuitive, and responsive user interfaces for websites and applications. I have a solid understanding of HTML, CSS, and JavaScript and TypeScript, and I am proficient in using popular frontend framework, React. </p>
            <p className='my-1 md:my-2 lg:my-5 leading-6'>My first dive into web development was in March 2020, when I decided to transition from Solar Engineer, to take time out and give this new found interest all my attention.</p>
        </div>
        <div className='flex items-center justify-center'>
            <Image
                src={myPic}
                alt='myPicture'
                className='rounded-xl hidden md:block opacity-25 h-[250px] w-[250px] md:h-[200px] md:w-[200px] lg:h-[240px] lg:w-[240px] xl:h-[300px] xl:w-[300px] aspect-square items-center backdrop-blur-sm'
            />
        </div>
        <div className='w-full'>
            <p className='my-1 md:my-2 lg:my-5 leading-6'>Through my journey as a web developer, I have gained knowledge in programming languages such as JavaScript and Solidity. These skills have been instrumental in enhancing my artistic creations and I continue to apply them daily.</p>
            <p className='my-1 md:my-2 lg:my-5 leading-6'>I have experience in collaborating with designers, product managers, and backend developers to ensure that the frontend meets the requirements of the project and delivers the best possible user experience. I am also well-versed in using version control tools like Git and am comfortable working with agile development methodologies.</p>
            <p className='my-1 md:my-2 lg:my-5 leading-6'>I am passionate about creating elegant and efficient frontend solutions that deliver the best experience to users. If you have any frontend development needs or questions, feel free to reach out to me. I would be more than happy to help!</p>
        </div>
      </div>
      <div className='mt-24 w-full flex flex-col items-center'>
        <h2 className='mb-10 text-[26px] md:text-[30px] lg:text-[34px]'>My Stacks!</h2>
        <div className='w-full flex flex-wrap items-center justify-center gap-5 md:gap-6 lg:gap-7'>
            <div className='flex flex-col gap-2 items-center shadow-xl w-24 h-22 md:w-32 md:h-24 bg-slate-700 rounded py-2 hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                <Image src={HTML} alt='html' />
                <p className='text-[11px] md:text-[12px] lg:text-[13px]'>HTML5</p>
            </div>
            <div className='flex flex-col gap-2 items-center shadow-xl w-24 h-22 md:w-32 md:h-24 bg-slate-700 rounded py-2 hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                <Image src={CSS} alt='css' />
                <p className='text-[11px] md:text-[12px] lg:text-[13px]'>CSS</p>
            </div>
            <div className='flex flex-col gap-2 items-center shadow-xl w-24 h-22 md:w-32 md:h-24 bg-slate-700 rounded py-2 hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                <Image src={JS} alt='javascript' />
                <p className='text-[11px] md:text-[12px] lg:text-[13px]'>JavaScript</p>
            </div>
            <div className='flex flex-col gap-2 items-center shadow-xl w-24 h-22 md:w-32 md:h-24 bg-slate-700 rounded py-2 hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                <Image src={TS} alt='typescript' />
                <p className='text-[11px] md:text-[12px] lg:text-[13px]'>TypeScript</p>
            </div>
            <div className='flex flex-col gap-2 items-center shadow-xl w-24 h-22 md:w-32 md:h-24 bg-slate-700 rounded py-2 hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                <Image src={react} alt='react' />
                <p className='text-[11px] md:text-[12px] lg:text-[13px]'>React</p>
            </div>
            <div className='flex flex-col gap-2 items-center shadow-xl w-24 h-22 md:w-32 md:h-24 bg-slate-700 rounded py-2 hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                <Image src={Python} alt='python' />
                <p className='text-[11px] md:text-[12px] lg:text-[13px]'>Python</p>
            </div>
            <div className='flex flex-col gap-2 items-center shadow-xl w-24 h-22 md:w-32 md:h-24 bg-slate-700 rounded py-2 hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                <Image src={Git} alt='git' />
                <p className='text-[11px] md:text-[12px] lg:text-[13px]'>Github</p>
            </div>
            <div className='flex flex-col gap-2 items-center shadow-xl w-24 h-22 md:w-32 md:h-24 bg-slate-700 rounded py-2 hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                <Image src={Figma} alt='figma' />
                <p className='text-[11px] md:text-[12px] lg:text-[13px]'>Figma</p>
            </div>
        </div>
        <p className='mt-10 mb-20 text-center text-[11px] md:text-[12px] lg:text-[13px]'>I am excited to further develop my skills and create innovative solutions that make a difference.</p>
        <div className='border w-[90%] border-zinc-50'></div>
        <p className='mt-5 text-[11px] md:text-[12px] lg:text-[14px]'>ENOUGH TALK 🤫, TIME TO SEE WHAT I’VE BUILT.</p>
      </div>
    </div>
  )
}

export default About
