import React from 'react'
import Project from '../Api/Projects'
import GitHubIcon from '@mui/icons-material/GitHub';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Link from 'next/link';

const Projects = () => {
  return (
    <div id='project' className='flex flex-col items-center py-[60px] md:py-[70px] lg:py-[80px] xl:py-[100px]'>
      <h1 className='text-center text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] mb-8 md:mb-12 lg:mb-20'>Projects</h1>
        {Project.map((project) => 
            <div key={project.id} className='flex flex-col justify-start items-center w-full'>
                <div className='flex justify-between border border-solid border-white-500 w-full p-5 md:p-8 lg:p-12 rounded-md cursor-pointer hover:text-[#101010] hover:bg-[#DEF2F2] ease-in-out duration-1000'>
                    <div className='flex flex-col justify-between'>
                        <h1 className='text-[18px] md:text-[24px] lg:text-[36px]'>{project.title}</h1>
                        <p className='text-[13px] md:text-[14px] lg:text-[15px] w-[80%] md:w-[100%] font-serif'>{project.text}</p>
                    </div>
                    <div className='flex flex-col items-end gap-6 md:gap-10'>
                        <h3 className='text-[14px] md:text-[16px] lg:text-[24px]'>{project.framework}</h3>
                        <div className='flex gap-4 md:gap-10'>
                            <div className='text-[13px] md:text-[14px] lg:text-[15px] font-serif'>
                                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className='flex flex-col gap-2 items-center'>
                                    <CallMadeIcon />
                                    Live
                                </a>
                            </div>
                            <div className='text-[13px] md:text-[14px] lg:text-[15px] font-serif'>
                                <a href={project.gitgubLink} target='_blank' rel="noopener noreferrer" className='flex flex-col gap-2 items-center'>
                                    <GitHubIcon />
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        <div className='mt-14'>
            <p className='text-[13px] md:text-[14px] lg:text-[15px] font-serif'>My <Link className='underline text-[#f26e49] font-semibold cursor-pointer' href="/resume/ONAKOYA_OLUWAKAYODE_SAHEED_CV.pdf" target='_blank' rel='noopener noreferrer'>Resume</Link> and other projects are available on <Link className='underline text-[#f26e49] font-semibold cursor-pointer' target='_blank' rel='noopener noreferrer' href="https://github.com/onakoyakayode">Github</Link></p>
        </div>
    </div>
  )
}

export default Projects
