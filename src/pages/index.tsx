
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
      router.push('/portfolio');
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
        <h1 className='text-[14px] md:text-[22px] lg:text-[40px] text-center animate__animated animate__slideInUp'>
          Welcome to my portfolio
        </h1>
      </div>
      <div>
    
      </div>
    </main>}
    </>
  )
}
