import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { error } from 'console';



interface FormData {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {

    const [disabled, setDisabled] = useState(false)
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>() 


    const onSubmit = async (data:FormData) => {
        setDisabled(true)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                alert(`${data.name}, Thank you for your message! You will get a feedback to your email address ${data.email} in less than 24hours.`)
                reset();
            }
        } catch(err) {
            console.log(err)
            alert('Something went wrong. Please try again.')
        }

        setDisabled(false)
    }

  return (
    <div id='contact' className='flex flex-col items-center px-3 md:px-[20px] lg:px-[50px] py-[40px] md:py-[60px] lg:py-[80px] xl:py-[100px]'>
        <h1 className='text-center text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] mb-8 md:mb-12 lg:mb-20'>Get in touch</h1>
        <p className='text-[11px] md:text-[12px] lg:text-[13px] text-center mb-10 md:mb-16'>Contact me if you have remote Job opportunities, Website/App development gigs, Collaborations or you just want to say hello 👋<br/>
            You can send me an <Link className='underline text-[#f26e49] cursor-pointer' href="mailto:onakoyakayode@gmail.com?subject=Hi April26">email</Link> if contact forms are&apos;t your thing.
        </p>
        <form className='p-5 flex flex-col items-center md:p-12 rounded bg-zinc-950 w-[90%] md:w-[600px]' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-12 w-full mb-10'>
              <div className='flex flex-col gap-2 md:gap-3 w-full'>
                <label className='text-[13px] md:text-[14px] lg:text-[15px]' htmlFor="name">Name:</label>
                <input className='text-[12px] md:text-[13px] lg:text-[14px] border-0 bg-transparent focus:outline-none border-b' type="text" {...register('name', {required: "This is required"})} />
              </div>
              <div className='flex flex-col gap-1 md:gap-3'>
                <label className='text-[13px] md:text-[14px] lg:text-[15px]' htmlFor="email">Email:</label>
                <input className='text-[12px] md:text-[13px] lg:text-[14px] border-0 bg-transparent focus:outline-none border-b' id='email' type="email" {...register("email", {required: 'This is required'})} />
              </div>
              <div className='flex flex-col gap-1 md:gap-3'>
                <label className='text-[13px] md:text-[14px] lg:text-[15px]' htmlFor="message">Message:</label>
                <input className='text-[12px] md:text-[13px] lg:text-[14px] border-0 bg-transparent focus:outline-none border-b' type="text" {...register("message", {required: "This is required"} )} />
              </div>
            </div>
            <button className='bg-[#f26e49] rounded py-3 px-6 w-full md:w-28 text-[12px] md:text-[13px] lg:text-[14px] hover:bg-[#DEF2F2] hover:text-[#f26e49] ease-in-out duration-300' disabled = {isSubmitting} type='submit'>Shoot</button>
        </form>
    </div>
  )
}

export default Contact
