import { useState } from 'react'
import './App.css'
import { GrFacebookOption } from "react-icons/gr";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";

function App() {
  return (
    <div className="">
      <main className=' flex lg:flex-row flex-col justify-center items-center gap-y-3  lg:py-5 py-[30px] px-[28px] bg-primary lg:bg-[url("/public/images/bg-desktop.svg")] bg-[url("/public/images/bg-mobile.svg")] lg:bg-center lg:bg-contain lg:bg-no-repeat bg-no-repeat  lg:h-lvh w-full border border-var(--primary) text-[#FFFFFF] gap-y-4 '>
        <section className="logo pb-5">
          <img
            src="/images/logo.svg"
            alt="logo"
            className="lg:w-[50%] w-[40%]"
          />
        </section>

        <section className="huddle-page">
          <section className="huddle-image">
            <img
              src="/images/illustration-mockups.svg"
              className="lg:w-20% w-screen"
              alt="illustration image"
            />
          </section>

          <section className="huddle-text">
            <div className="heading">
              <h1 className=" text-[clamp(24px,5vw,32px)] font-poppins font-[700] text-center font-poppins">
                Build The Community Your Fans Will Love
              </h1>
            </div>

            <div className="paragraph max-w-screen flex justify-center pb-2">
              <p className="text-[clamp(15px,4vw,19px)]  text-center font-opensans">
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.{" "}
              </p>
            </div>
            <div className="cta-section flex justify-center">
            <button className="bg-[#FFFFFF] lg:w-[20%] w-[65%] rounded-[20px] text-primary py-2 text-[14px] font-[500] hover:bg-active hover:text-[#FFFFFF] cursor-pointer">
              Register
            </button>
            </div>

            <section className='socials w-full flex justify-center gap-3 mt-[40px]'>

  <div className='hover:border hover:text-active hover:border-active border-2 p-[8px] rounded-[50%] flex justify-center items-center cursor-pointer'>
   <a href=""><GrFacebookOption className='' / ></a>
   </div>
  
  <div className='hover:border hover:text-active hover:border-active border-2 p-[6px] rounded-[50%] flex justify-center items-center cursor-pointer'>
   <a href=""><TbBrandTwitterFilled /></a>
   </div>
  
  <div className='hover:border hover:text-active hover:border-active border-2 p-[6px] rounded-[50%] flex justify-center items-center cursor-pointer'>
   <a href=""><SlSocialInstagram /></a>
   </div>
  
</section>

          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
