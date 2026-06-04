"use client";

import React, { useEffect, useState } from "react";
import "@/style/global.css";
import { gsap } from "gsap";



const Hero = () => {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector(".fade-left");

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);
    
  return (
   <section className="bg-header-gradient w-full h-screen ">
     <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#1F1F1F]/30 backdrop-blur-md py-5 " : "bg-transparent py-17 max-lg:py-10"}`}>
      <div className="flex items-center justify-between container mx-auto px-[50px] max-lg:px-3  transition-all">
      <img src="/logo/sentinel_logo.png" className="w-25 max-lg:w-20" alt="" />
      <ul className="flex justify-around max-lg:hidden max-xl:ml-0 ml-20 gap-[69px] bg-[#1F1F1F]/30 px-[72px] py-[20px]  text-white rounded-[50px] ">
        <li><a className="hover:text-[#b4b4b4] transition-all" href="#">Home</a></li> 
        <li><a className="hover:text-[#b4b4b4] transition-all" href="#">About</a></li> 
        <li><a className="hover:text-[#b4b4b4] transition-all" href="#">Services</a></li> 
        <li><a className="hover:text-[#b4b4b4] transition-all" href="#">Work</a></li> 
      </ul> 

      <div className="flex max-lg:hidden">
        <button className="font-medium  text-white text-xl hover:text-[#b4b4b4]  transition-all ">Daftar</button>
        <button className="ml-4 px-5 py-1 font-normal font-medium text-white text-xl rounded-3xl bg-[#3AC081]  hover:bg-[#2b9765] border border-black transition-all">Masuk</button>
      </div>
      
        <button onClick={() => setMenuOpen(!menuOpen)} className="hidden max-lg:flex flex-col gap-1 z-50 transition-all">
          <span className="w-7 h-[3px] bg-white rounded-full"></span>
          <span className="w-7 h-[3px] bg-white rounded-full"></span>
          <span className="w-7 h-[3px] bg-white rounded-full"></span>
        </button>
      </div>
    </nav> 

    {
      menuOpen && (
        <div className="fixed top-[110px] left-1/2 -translate-x-1/2 w-[95%] max-w-[500px] transition-all bg-[#0C2644]/80 backdrop-blur-md rounded-3xl p-8 z-40 flex flex-col items-center gap-8 text-white text-xl lg:hidden border border-white/10">
          
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Work</a>

          <button className="bg-[#3AC081] px-8 py-3 rounded-full">
            Masuk
          </button>

        </div>
      )
    }

    <div className=" flex items-center justify-between container mx-auto px-[50px] pt-73 max-lg:px-3 max-lg:pt-[232px]">
      <div className="w-[750px] z-10 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:text-center max-lg:w-full">
        <h1 className={` fade-left ${show ? "show" : ""} text-6xl leading-17.5 font-semibold text-white max-lg:text-[45px] max-md:text-3xl max-lg:leading-10`}>Pantau Perangkat Anda Secara Real-Time</h1>
        <p className="text-base animate-fade-left mt-12.5 text-white max-lg:text-[13px] max-lg:mt-5 ">Sistem monitoring perangkat otomatis yang mengirimkan data lokasi akurat setiap menit langsung ke layar Anda hanya dengan menghubungkan perangkat dan melihat semua informasi penting secara otomatis di dalam dashboard.</p>
        <div className="mt-12.5 flex gap-8.5 max-lg:gap-6 ">
          <button className="w-51 bg-[#3AC081] py-3 rounded-full text-white border border-white max-lg:w-34.5 max-lg:py-2 max-lg:text-[10px] hover:bg-[#2b9765] transition-all">Masuk Sekarang</button>
          <button className="w-51 bg-white py-3 rounded-full text-black border border-black max-lg:w-34.5 max-lg:py-2 max-lg:text-[10px] hover:bg-[#b4b4b4] transition-all ">Pelajari Lebih Lanjut</button>
        </div>


        <div className="relative w-[500px] mask-fade mt-18 overflow-hidden">

          {/* Track */}
            <div className="flex w-max animate-marquee">
              {/* ORIGINAL */}
              <div className="flex items-center gap-6 shrink-0 pr-6">
                <img src="/logo/l-figma.png" width={60} alt="" />
                <img src="/logo/l-github.png" width={81} alt="" />
                <img src="/logo/l-next.png" width={48} alt="" />
                <img src="/logo/l-node.png" width={71} alt="" />
                <img src="/logo/l-prisma.png" width={64} alt="" />
                <img src="/logo/l-tailwind.png" width={101} alt="" />
              </div>

              {/* DUPLICATE */}
              <div className="flex items-center shrink-0 gap-6 pr-6">
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
      <div className="absolute top-[100px] pointer-events-none poin z-0 right-0 w-350 max-2xl:w-300 max-xl:w-250 max-lg:w-200 max-md:hidden">
        <img draggable="false" className="select-none" src="/logo/bg-sentinel.png" alt="" />
      </div>
    </div>
   </section>
  );
};

export default Hero;