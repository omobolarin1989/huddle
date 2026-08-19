import "./App.css";
import { GrFacebookOption } from "react-icons/gr";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";


function App() {
  return (
    <div>
      <main className="bg-[url('/images/bg-mobile.svg')] bg-primary w-full min-h-screen px-[38px] py-[30px] lg:px-[80px] flex flex-col bg-contain bg-no-repeat text-[#FFFFFF] md:gap-y-[40px] gap-y-4">
        <section className="logo w-[100%]">
       <img src="/images/logo.svg" alt="logo" className=" w-[55%] md:w-[15%] lg:w-[15%]"/>
       </section>

       <section className="page-content flex flex-col lg:flex-row lg:gao-y-7 gap-y-5 lg:w-full lg:gap-x-[50px]">
          <div className="illustration-image lg:w-[65%]">
            <img src="/images/illustration-mockups.svg" alt="illustration image" className="w-full" />
          </div>
          <div className="page-text lg:w-[40%] flex flex-col lg:gap-y-[30px] gap-y-4 lg:mt-[60px]">
            <h1 className=" lg:w-[70%] font-poppins text-center lg:text-left text-[clamp(1.1rem,2vw,2.8rem)] font-[600]">Build The Community Your Fans Will Love</h1>

            <p className="text-center text-[clamp(0.74rem,2vw,1.2rem)] lg:text-left font-opensans">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
  Create connections with your users as you engage in genuine discussion.</p>
  <div className="w-full flex justify-center lg:justify-start">
  <button type="submit" className="border font-[400] text-[20px] py-[5px] lg:py-[9x] px-[20%] md:px-[120px] lg:px-[45px] flex justify-center lg:rounded-[25px] rounded-[20px] bg-[#FFFFFF] text-primary hover:bg-active hover:cursor-pointer hover:text-[#FFFFFF] hover:border-none font-opensans">Register</button>
        </div>
          </div>
          
          
       </section>

      

       <section className="social flex justify-center lg:justify-end gap-x-2.5 md:gap-x-6 md:pt-[40px] pt-[50px]">

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
      <footer class="attribution text-center">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
      Coded by <a href="#">Your Name Here</a>.
    </footer>
    
    </div>
  );
}

export default App;
