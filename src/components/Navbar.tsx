'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import srmLogo from '/public/srm.jpeg'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const textColor = isScrolled ? 'text-black' : 'text-white'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-4 md:ml-[-10px]">
              <Link href="/" className="relative w-52 h-16 overflow-hidden rounded-md shadow-lg transition-transform hover:scale-105">
                <Image src={srmLogo} alt="SRM Logo" fill className="object-contain" sizes="208px" priority />
              </Link>
              <span className={`text-2xl font-bold transition-colors hover:opacity-90 ${textColor}`}>
                ICIRTAM &apos;25
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Topics', 'Speakers', 'Registration'].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} 
                  className={`font-semibold transition-all hover:scale-105 hover:opacity-90 ${textColor}`}>
                  {item}
                </Link>
              ))}
              <Link 
                href="https://forms.gle/kC5ACBHGLPJxNH6A6" 
                target="_blank"
                className="bg-blue-900 text-white px-6 py-2.5 rounded-md hover:bg-blue-800 transition-all hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Register Now
              </Link>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className={textColor} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Separate mobile menu */}
      <div className={`fixed inset-0 bg-blue-900/95 z-40 transition-all duration-300 md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="pt-24 px-6">
          <div className="flex flex-col space-y-6">
            {['About', 'Topics', 'Speakers', 'Registration'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-xl font-semibold hover:text-blue-200 transition-all">
                {item}
              </Link>
            ))}
            <Link href="https://forms.gle/kC5ACBHGLPJxNH6A6" target="_blank"
              className="bg-white text-blue-900 px-6 py-3 rounded-md text-center font-semibold hover:bg-blue-50 transition-all">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
