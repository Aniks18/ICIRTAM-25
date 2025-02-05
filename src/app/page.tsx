
'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Topics from '@/components/Topics'
import Speakers from '@/components/Speakers'
import Registration from '@/components/Registration'
import Footer from '@/components/Footer'
import FacultyCoordinators from '@/components/FacultyCoordinators'
import AdvisoryCommittee from '@/components/AdvisoryCommittee'
import OrganizingCommittee from '@/components/OrganizingCommittee'

export default function Home() {
 const [scrollY, setScrollY] = useState(0)
 
 useEffect(() => {
   const handleScroll = () => {
     requestAnimationFrame(() => {
       setScrollY(window.scrollY)
     })
   }
   window.addEventListener('scroll', handleScroll, { passive: true })
   return () => window.removeEventListener('scroll', handleScroll)
 }, [])

 return (
   <main className="relative">
     <div className="min-h-screen relative">
       <div 
         className="fixed inset-0 bg-gradient-to-b from-black/70 to-black/40"
         style={{
           transform: `translateY(${scrollY * 0.5}px)`,
           transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
         }}
       >
         <img
           src="/srmhome.jpg"
           alt="SRM Vadapalani"
           className="w-full h-full object-cover opacity-80"
         />
       </div>
       <Hero />
     </div>
     <div className="relative bg-[#FFF5EE] z-10">
       <About />
       <Topics />
       <Speakers />
       <OrganizingCommittee />
       <AdvisoryCommittee />
       <FacultyCoordinators />
       <Registration />
       <Footer />
      
     </div>
   </main>
 )
}