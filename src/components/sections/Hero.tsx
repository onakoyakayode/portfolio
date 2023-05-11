import React, { useEffect, useRef, useState } from 'react'
import Typed from 'react-typed';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';


const Hero = () => {

    const [offline, setOffline] = useState(false)
    const [time, setTime] = useState("")
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const date = new Date();
            let timing = date.toLocaleTimeString();
            setTime(timing)
        }, 0)
    }, [])

    useEffect(() => {
        if (time >= "08:00:00" && time <= "18:00:00") {
            setOffline(true)
        } else {
            setOffline(false)
        }
    }, [time])

    
  return (
    <div className='w-full z-0 flex flex-col justify-between items-center h-[92vh] md:h-[90vh]'>
        <div></div>
        <div className='flex flex-col justify-center'>
            <h1 className='animate__animated animate__fadeInLeft flex flex-col items-center text-[6rem] leading-[5rem] md:text-[8rem] md:leading-[7rem] lg:text-[9rem] lg:leading-[8rem] xl:text-[12rem] xl:leading-[10rem]'>2604<span>Dev.</span></h1>
            <Typed
            strings={['Frontend Developer, Frontend Engineer']}
            className='text-center text-[11px] md:text-[13px] mt-3'
            typeSpeed={40}
            />
        </div>
        <div className='flex justify-between items-center h-[7vh] md:h-[9vh] border-t border-r-orange-100 w-full py-[1rem] md:py-[1.5rem] px-3 md:px-[20px] lg:px-[50px] text-[11px] md:text-[12px] lg:text-[13px]'>
            <div className={offline ? 'flex items-center gap-1 opacity-100' : "flex items-center gap-1 opacity-40"}>
                {offline ? <OnlinePredictionIcon /> : <FilterAltOffIcon />}
                <p>2604 is {offline ? "Online" : "Offline"}</p>
            </div>
            <div className='flex gap-2'>
                <p className='text-[#f26e49]'>{`[ ${time} ]`}</p>
                <p>Lagos, NG</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
