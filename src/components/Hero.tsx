const Hero = () => {
  return (
    <div className="relative min-h-screen pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="/srm-building.jpg"
          alt="SRM Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-800/85 to-black/90" />
      </div>
 
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center text-white">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <div className="mb-2">INTERNATIONAL CONFERENCE ON</div>
            <div className="text-blue-200">INNOVATIONS & RECENT TRENDS<br />IN APPLIED MATHEMATICS</div>
          </h1>
          <p className="text-2xl md:text-3xl text-blue-100">(ICIRTAM &apos;25)</p>
          <p className="text-xl text-blue-100">21st & 22nd FEBRUARY 2025</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 pt-4">
            <a href="https://forms.gle/kC5ACBHGLPJxNH6A6" target="_blank" 
              className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-blue-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Register Now
            </a>
            <a href="/brochure.pdf" 
              download
              className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </div>
  )
 }
 
 export default Hero