import "./App.css";
import { GrFacebookOption } from "react-icons/gr";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";


function App() {
  return (
    <div>
      <main className="bg-[url('/images/bg-mobile.svg')] bg-primary w-full min-h-screen md:border-3 md:border-amber-600 px-[32px] py-[30px] flex flex-col bg-contain bg-no-repeat text-[#FFFFFF] md:gap-y-[40px] gap-y-4">
        <section className="logo w-[100%]">
       <img src="/images/logo.svg" alt="logo" className=" w-[55%] md:w-[20%]"/>
       </section>

       <section className="page-content flex flex-col gap-y-5">
          <div className="illustration-image">
            <img src="/images/illustration-mockups.svg" alt="illustration image" className="w-full" />
          </div>
          <div className="page-text">
            <h1 className="font-poppins text-center text-[clamp(1.3rem,4vw,2.3rem)] font-[600]">Build The Community Your Fans Will Love</h1>

            <p className="text-center text-[clamp(0.8rem,2vw,2.3rem)] font-opensans ">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
  Create connections with your users as you engage in genuine discussion.</p>
          </div>
          
       </section>

       <section className="reg-button flex justify-center">
        <button type="submit" className="border py-[7px] px-[60px] md:px-[120px] rounded-[20px] bg-[#FFFFFF] text-primary">Register</button>
       </section>

       <section className="social flex justify-center gap-x-2.5 md:gap-x-6 md:pt-[70px] pt-[50px]">

         <div className='hover:border hover:text-active hover:border-active border-1 p-[5px] md:p-[10px] md:rounded-[30px] rounded-[100%] flex justify-center items-center cursor-pointer'>
   <a href=""><GrFacebookOption className='' / ></a>
   </div>

          <div className='hover:border hover:text-active hover:border-active border-1 p-[5px] md:px-[10px] md:rounded-[30px] rounded-[100%] flex justify-center items-center cursor-pointer'>
   <a href=""><TbBrandTwitterFilled /></a>
   </div>

     <div className='hover:border hover:text-active hover:border-active border-1 p-[5px] md:p-[10px] md:rounded-[30px] rounded-[100%] flex justify-center items-center cursor-pointer'>
   <a href=""><SlSocialInstagram /></a>
   </div>
       </section>
      
   

  

        
      </main>

    
    </div>
  );
}

export default App;
