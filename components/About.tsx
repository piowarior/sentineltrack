import React from 'react'

const About = () => {
  return (
    <>
    <section className="w-full h-screen bg-[#0C2644] flex flex-col items-center justify-center">
      <div className="mt-[63px]"> 
        <h1 className="text-[50px] text-white font-semibold">Tentang Kami</h1>
        <div className="">

        </div>
      </div>
      <div className="container mx-auto px-[50px] flex mt-28">
        <div className="w-[50%] flex flex-col justify-center">
          <h2 className='text-5xl leading-17.5 font-semibold text-white max-lg:text-[45px] max-md:text-3xl max-lg:leading-10'>Sentinel <span className='font-thin'>Track</span></h2>
          <p className="text-white text-base mt-5 font-light">SentinelTrack adalah platform pemantauan perangkat berbasis web yang dirancang untuk membantu pengguna melacak posisi dan status aset digital mereka secara langsung dari satu pintu.</p>
          <div className="">
            <ul>
              <li className='flex flex-col transition'><details className="decoration-0"> <summary>1. Pemantauan Mandiri</summary> <h1>haaalo</h1></details> <svg width="550" height="1" viewBox="0 0 550 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="550" y2="0.5" stroke="white"/>
              </svg>
              </li>
              <li><details className="decoration-0"> <h1>haaalo</h1></details></li>
              <li><details className="decoration-0"> <h1>haaalo</h1></details></li>
              <li><details className="decoration-0"> <h1>haaalo</h1></details></li>
            </ul>
          </div>
        </div>
        <div className="">
          <img className=" w-[664px] h-[500px] object-cover rounded-[50px] border border-white  " src="/picture/picture-maps1.png" alt="" />
        </div>
      </div>
    </section>
    </>
  )
}

export default About