import React from "react";

const Header = () => {
  return (
    <section 
      className="min-h-screen w-full text-white px-[240px]   flex flex-col"
      style={{
        background: "radial-gradient(circle at center, #133559 0%, #0C2644 100%)"
      }}
    >
      {/* --- NAVBAR --- */}
      <nav className="flex items-center  justify-between py-[70px] w-full">
        {/* Logo */}
        <div className="flex items-center  gap-2">
          <img className="w-[100px] " src="/logo/sentinel_logo.png" alt="logo" />
        </div>  

        {/* Navigation Links */}
        <div className="hidden md:flex justify-around items-center bg-black/20 backdrop-blur-md px-8 py-[20px] w-[550px] rounded-full border border-white/10 gap-8">
          <a href="#" className="text-sm font-medium text-[16px] hover:text-cyan-400 transition">Home</a>
          <a href="#" className="text-sm font-medium text-[16px] hover:text-cyan-400 transition">About</a>
          <a href="#" className="text-sm font-medium text-[16px] hover:text-cyan-400 transition">Services</a>
          <a href="#" className="text-sm font-medium text-[16px] hover:text-cyan-400 transition">Work</a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-6">
          <a href="#" className="font-semibold text-[16px] ">Daftar</a>
          <button className="bg-[#4ADE80] text-black px-6 py-2 rounded-full text-[16px] font-bold text-sm hover:bg-[#3dbd6d] transition">
            Masuk
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="flex-1 flex flex-col justify-center relative">
        <div className="max-w-2xl z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Pantau Perangkat Anda <br /> Secara Real-Time
          </h1>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl">
            Sistem monitoring perangkat otomatis yang mengirimkan data lokasi akurat setiap menit 
            langsung ke layar Anda hanya dengan menghubungkan perangkat dan melihat semua 
            informasi penting secara otomatis di dalam dashboard.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-16">
            <button className="bg-[#4ADE80] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Masuk Sekarang
            </button>
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Pelajari Lebih Lanjut
            </button>
          </div>

          {/* Partners / Tech Stack (Placeholder) */}
          <div className="flex items-center gap-8 opacity-50 grayscale">
             <span className="text-sm font-bold italic">Figma</span>
             <span className="text-sm font-bold">NEXT.js</span>
             <span className="text-sm font-bold">node.js</span>
             <span className="text-sm font-bold">GitHub</span>
             <span className="text-sm font-bold">tailwindcss</span>
          </div>
        </div>

        {/* Image/Shape Placeholder Area */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
            {/* Di sini nanti tempat gambar shape kotak-kotak kamu */}
            <div className="w-[500px] h-[500px] flex items-center justify-center border-2 border-dashed border-white/10 rounded-3xl">
                <p className="text-white/20 italic">Shape Image Placeholder</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Header;