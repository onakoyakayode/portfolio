import { Inter } from 'next/font/google'
import Typed from 'react-typed';
// import CountUp from 'react-countup';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const router = useRouter();
  const [welcomeScreen, setWelcomeScreen] = useState(true)


  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeScreen(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [])


  useEffect(() => {
    if (!welcomeScreen) {
      router.push('/mainpage');
    }
  }, [router, welcomeScreen])



  return (
    <>
    <Head>
      <title>2604 Portfolio</title>
      <meta property="og:title" content="2604 Portfolio" key="title" />
    </Head>
    <Head>
      <meta property="og:title" content="2604 Portfolio" key="title" />
    </Head>
   
    {welcomeScreen && <main className='h-screen p-10 flex flex-col justify-between items-center'>
      <div></div>
      <div>
        <h1 className='text-2xl md:text-4xl lg:text-7xl'>
          {/* <Typed 
          type={['Software ', 'Developer', 'Engineer']} // if no backspace animation just write 1 string only (no need to use array)
          backspace={[1, 2]} // contains the index value of the type property, if only 1 index no need to use array (will execute from the smallest index)
          delay={1000} // delay backspace animation (in milliseconds)
          duration={50} // duration of typing animation per character (in milliseconds). Default 100
          cursor={'blinking-text-cursor'} // style for blinking text cursor animation. can be filled directly with css properties or class names in your css file
          /> */}
          <Typed
              strings={[
                "Software Engineer, Frontend Engineer and a Tech-Savy...",
              ]}
              typeSpeed={40}
              className='text-[12px] md:text-[16px] lg:text-[24px] text-center'
            />

        </h1>
      </div>
      <div>
        {/* <CountUp end={100}/>% */}
      </div>
    </main>}
    </>
  )
}
