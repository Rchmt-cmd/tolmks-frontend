'use client'
import Image from "next/image"
import dynamic from "next/dynamic"
import { useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"

const Sidebar = dynamic(() => import('./Sidebar'))

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  

  return (
    <>
      <div className=" bg-[#f7f7f8] w-full p-2 relative">
        <div className="block xl:hidden absolute top-9 left-6 cursor-pointer" onClick={toggleMobileMenu}>
          <Bars3Icon className="w-6 text-black" />
        </div>
        <div className="flex justify-center align-middle">
          <a href="#">
            <Image 
              src='/logo-mmn-jtse.png' 
              width={150} 
              height={100} 
              alt="logo" 
            />
          </a>
        </div>
      </div>
      {isMobileMenuOpen && ( <Sidebar /> )}
    </>
  )
}

export default Header