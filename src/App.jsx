import { useState } from 'react'
import './App.css'

function App() {
 

  return (
    <div className=''>
    <main className=' flex lg:flex-row flex-col justify-center items-center gap-y-3  lg:py-5 py-[30px] px-[28px] bg-primary lg:bg-[url("/public/images/bg-desktop.svg")] bg-[url("/public/images/bg-mobile.svg")] lg:bg-center lg:bg-contain lg:bg-no-repeat bg-no-repeat  lg:h-lvh w-full border border-var(--primary) text-[#FFFFFF] gap-y-4 '>

       <section className='logo pb-5'>
        <img src="/public/images/logo.svg" alt="logo" className='lg:w-[50%] w-[40%]'  / >
      </section>
    
    </main>
    </div>
  )
}

  export default App