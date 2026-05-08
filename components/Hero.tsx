import React from "react";
import "@/style/global.css"

const Hero = () => {
  return (
   <section className="bg-header-gradient w-full h-screen">
    <nav className="flex items-center justify-between px-[240px] py-[70px]">
      <img src="/logo/sentinel_logo.png" className="w-25" alt="" />
      <ul className="flex justify-around max-md:hidden ml-20 gap-[69px] bg-[#1F1F1F]/30 px-[72px] py-[20px] text-white rounded-[50px]">
        <li><a href="#">Home</a></li> 
        <li><a href="#">About</a></li> 
        <li><a href="#">Services</a></li> 
        <li><a href="#">Work</a></li> 
      </ul> 

      <div className="flex">
        <button className="font-medium text-white text-xl">Daftar</button>
        <button className="ml-4 px-5 py-1 font-normal font-medium text-white text-xl rounded-3xl bg-[#3AC081] ">Masuk</button>
      </div>
    </nav> 

    <div className=" flex px-[240px] mt-[110px] ">
      <div className="w-[750px] z-10">
        <h1 className="text-6xl leading-17.5 font-semibold text-white">Pantau Perangkat Anda Secara Real-Time</h1>
        <p className="text-base mt-12.5 text-white">Sistem monitoring perangkat otomatis yang mengirimkan data lokasi akurat setiap menit langsung ke layar Anda hanya dengan menghubungkan perangkat dan melihat semua informasi penting secara otomatis di dalam dashboard.</p>
        <div className="mt-12.5 flex gap-8.5">
          <button className="w-51 bg-[#3AC081] py-3 rounded-full text-white border border-white">Masuk Sekarang</button>
          <button className="w-51 bg-white py-3 rounded-full text-black border border-black">Pelajari Lebih Lanjut</button>
        </div>


        <div className="relative w-[500px] mask-fade mt-18 overflow-hidden">

          {/* Track */}
            <div className="flex w-max animate-marquee gap-6">
              {/* ORIGINAL */}
              <div className="flex items-center gap-6">
                <img src="/logo/l-figma.png" width={60} alt="" />
                <img src="/logo/l-github.png" width={81} alt="" />
                <img src="/logo/l-next.png" width={48} alt="" />
                <img src="/logo/l-node.png" width={71} alt="" />
                <img src="/logo/l-prisma.png" width={64} alt="" />
                <img src="/logo/l-tailwind.png" width={101} alt="" />
              </div>

              {/* DUPLICATE */}
              <div className="flex items-center gap-6">
                <img src="/logo/l-figma.png" width={60} alt="" />
                <img src="/logo/l-github.png" width={81} alt="" />
                <img src="/logo/l-next.png" width={48} alt="" />
                <img src="/logo/l-node.png" width={71} alt="" />
                <img src="/logo/l-prisma.png" width={64} alt="" />
                <img src="/logo/l-tailwind.png" width={101} alt="" />
              </div>

            </div>
        </div>


      </div>
      <div className="absolute top-[100px] poin z-0 right-0 w-350 max-lg:w-300">
        <img className="pointer-events-none select-none" src="/logo/bg-sentinel.png" alt="" />
      </div>
    </div>
   </section>
  );
};

export default Hero;