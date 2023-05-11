
import {useRouter}  from 'next/router'
import { useEffect, useState } from 'react';
import Head from 'next/head';



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
          Welcome to my portfolio

        </h1>
      </div>
      <div>
        {/* <CountUp end={100}/>% */}
      </div>
    </main>}
    </>
  )
}
