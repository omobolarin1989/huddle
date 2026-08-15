import "./App.css";
import { GrFacebookOption } from "react-icons/gr";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";

function App() {
  return (
    <div>
      <main className=' flex flex-col items-center gap-y-3  lg:py-[30px] py-[30px] lg:px-[40px] px-[28px] bg-primary lg:bg-[url("/public/images/bg-desktop.svg")] bg-[url("/public/images/bg-mobile.svg")] lg:bg-center lg:bg-contain lg:bg-no-repeat bg-no-repeat  lg:h-vh h-100vh w-full text-[#FFFFFF] gap-y-4 '>
        <section className="logo lg:pb-[30px] md:w-[100%] md:flex  md:pb-0 pb-1 w-[100%] lg:w-[100%] w-full">
          <img
            src="/images/logo.svg"
            alt="logo"
            className="lg:w-[10%] md:w-[15%] w-[30%]"
          />
        </section>

        <section className="huddle-page flex lg:flex-row md:flex-row flex-col lg:gap-x-[65px] gap-y-[20px]">
          <section className="huddle-image lg:w-[60%] md:w-[60%]">
            <img
              src="/images/illustration-mockups.svg"
              className="lg:w-[100%] w-screen"
              alt="illustration image"
            />
          </section>

          <section className="huddle-text lg:w-[40%] md:w-[50%] lg:justify-between flex flex-col lg:mt-[50px]">
            <div className="header-para flex flex-col gap-y-4">
            <div className="heading lg:leading-[310%]">
              <h1 className=" text-[clamp(1.4rem,5vw,3.2rem)] font-poppins font-[600] lg:font-[700] lg:text-left text-center ">
                Build The Community Your Fans Will Love
              </h1>
            </div>

            <div className="paragraph max-w-screen flex justify-center pb-2">
              <p className="text-[clamp(0.82rem,3vw,1.4rem)] lg:text-left text-center font-opensans">
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.{" "}
              </p>
            </div>
            <div className="cta-section flex justify-center lg:justify-start">
              <button className="bg-[#FFFFFF] lg:w-[35%] w-[75%] rounded-[20px] text-primary py-2 lg:py-3 lg:text-[16px] text-[14px] font-[500] lg:font-[700] hover:bg-active hover:text-[#FFFFFF] cursor-pointer font-opensans">
                Register
              </button>
            </div>
            </div>

            <section className="socials w-full lg:h-auto flex justify-center lg:justify-end gap-3 mt-[40px] ">
              <div className="hover:border-2 hover:text-active hover:border-active border-2 p-[8px] rounded-[50%] flex justify-center items-center cursor-pointer">
                <a href="">
                  <GrFacebookOption className="" />
                </a>
              </div>

              <div className="hover:border-2 hover:text-active hover:border-active border-2 p-[6px] rounded-[50%] flex justify-center items-center cursor-pointer">
                <a href="">
                  <TbBrandTwitterFilled />
                </a>
              </div>

              <div className="hover:border-2 hover:text-active hover:border-active border-2 p-[6px] rounded-[50%] flex justify-center items-center cursor-pointer">
                <a href="">
                  <SlSocialInstagram />
                </a>
              </div>
            </section>
          </section>
        </section>
      </main>

      <footer className="attribution text-center">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="text-attribution-link"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="#" className="text-attribution-link">
          Olaniyi Olatunbosun
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
