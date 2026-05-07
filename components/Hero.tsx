import React from "react";
import "@/style/global.css"

const Hero = () => {
  return (
   <section className="bg-header-gradient w-full h-[100vh]">
    <nav className="flex items-center justify-between px-[240px] py-[70px]">
      <img src="/logo/sentinel_logo.png" className="w-25" alt="" />
      <ul className="flex justify-around gap-[69px] bg-[#1F1F1F]/30 px-[72px] py-[20px] text-white rounded-[50px]">
        <li><a href="#">Home</a></li> 
        <li><a href="#">About</a></li> 
        <li><a href="#">Services</a></li> 
        <li><a href="#">Work</a></li> 
      </ul> 

      <div className="flex ">
        <button>Daftar</button>
        <button>Masuk</button>
      </div>
    </nav> 

    <div className="">
      <div className="">
        <h1>Pantau Perangkat Anda Secara Real-Time</h1>
        <p>Sistem monitoring perangkat otomatis yang mengirimkan data lokasi akurat setiap menit langsung ke layar Anda hanya dengan menghubungkan perangkat dan melihat semua informasi penting secara otomatis di dalam dashboard.</p>
        <div className="">
          <button>Mulai Sekarang</button>
          <button>Pelajari Lebih Lanjut</button>
        </div>
        <div className="">

        </div>
      </div>
      <div className="">
        <img src="#" alt="" />
      </div>
    </div>
   </section>
  );
};

export default Hero;