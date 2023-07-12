'use client'
import { HomeIcon, UserIcon, HandThumbUpIcon, MapPinIcon, RssIcon, PhoneIcon, StarIcon, UserGroupIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { useState } from "react";

const Sidebar = () => {
  const [isAboutSubMenuOpen, setIsAboutSubMenuOpen] = useState(false);
  const [isLayananSubMenuOpen, setIsLayananSubMenuOpen] = useState(false);
  const [isMediaSubMenuOpen, setIsMediaSubMenuOpen] = useState(false);
  const [isKerjasamaSubMenuOpen, setIsKerjasamaSubMenuOpen] = useState(false);
  const [isGambaranSubMenuOpen, setIsGambaranSubMenuOpen] = useState(false);

  const toggleAboutSubMenu = () => {
    setIsAboutSubMenuOpen(!isAboutSubMenuOpen);
    setIsLayananSubMenuOpen(false);
    setIsGambaranSubMenuOpen(false);
    setIsKerjasamaSubMenuOpen(false);
    setIsMediaSubMenuOpen(false);
  }
  
  const toggleLayananSubMenu = () => {
    setIsGambaranSubMenuOpen(false);
    setIsMediaSubMenuOpen(false);
    setIsAboutSubMenuOpen(false);
    setIsKerjasamaSubMenuOpen(false);
    setIsLayananSubMenuOpen(!isLayananSubMenuOpen);
  }
  
  const toggleMediaSubMenu = () => {
    setIsGambaranSubMenuOpen(false);
    setIsKerjasamaSubMenuOpen(false);
    setIsMediaSubMenuOpen(!isMediaSubMenuOpen);
    setIsAboutSubMenuOpen(false);
    setIsLayananSubMenuOpen(false);
  }
  
  const toggleKerjasamaSubMenu = () => {
    setIsGambaranSubMenuOpen(false);
    setIsKerjasamaSubMenuOpen(!isKerjasamaSubMenuOpen);
    setIsMediaSubMenuOpen(false);
    setIsAboutSubMenuOpen(false);
    setIsLayananSubMenuOpen(false);
  }
  
  const toggleGambaranSubMenu = () => {
    setIsGambaranSubMenuOpen(!isGambaranSubMenuOpen);
    setIsKerjasamaSubMenuOpen(false);
    setIsMediaSubMenuOpen(false);
    setIsLayananSubMenuOpen(false);
  }

  return (
    <div className="w-full relative top-0 xl:hidden bg-slate-400 overflow-x-hidden bg-opacity-50">
          <div className="text-white h-[100rem] overflow-auto bg-[#124c83] w-[250px] bg-opacity-95">
            <ul>
              <li>
                <a href="" className="flex py-4 px-4 hover:bg-[#477eb1c5]">
                  <i><HomeIcon className="w-6 text-white mr-2"/></i>
                  <span>Beranda</span>
                </a>
              </li>
              <li className="flex flex-col justify-between align-center">
                <span href="" className="flex cursor-pointer py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]" onClick={toggleAboutSubMenu}>
                  <div className="flex">
                    <i><UserIcon className="w-6 text-white mr-2"/></i>
                    <span>Tentang Kami</span>
                  </div>
                  <ChevronRightIcon className="w-4 text-white" />
                </span>
                {isAboutSubMenuOpen && (
                  <ul>
                    <li className="flex flex-col justify-between align-center" onClick={toggleGambaranSubMenu}>
                      <span href="" className="cursor-pointer pl-12 flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                        <span>Gambaran Umum</span>
                        <ChevronRightIcon className="w-4 text-white" />
                      </span>
                      {isGambaranSubMenuOpen && (
                        <ul>
                          <li className="flex flex-col justify-between align-center">
                            <a href="" className="flex pl-20 py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                              <span>Profil Perusahaan</span>
                            </a>
                          </li>
                          <li className="flex flex-col justify-between align-center">
                            <a href="" className="flex pl-20 py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                              <span>Sejarah Perusahaan</span>
                            </a>
                          </li>
                          <li className="flex flex-col justify-between align-center">
                            <a href="" className="flex pl-20 py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                              <span>Visi & Misi dan Tujuan Perusahaan</span>
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="flex flex-col justify-between align-center">
                      <a href="" className="pl-12 flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                        <span>CSR</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={toggleLayananSubMenu}>
                <span className="cursor-pointer flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                  <div className="flex">
                    <i><HandThumbUpIcon className="w-6 text-white mr-2"/></i>
                    <span>Layanan Jalan Tol</span>
                  </div>
                  <ChevronRightIcon className="w-4 text-white" />
                </span>
                {isLayananSubMenuOpen && (
                  <ul>
                    <li className="flex flex-col justify-between align-center">
                      <a href="" className="pl-12 flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                        <span>Cetak Struk</span>
                      </a>
                    </li>
                    <li className="flex flex-col justify-between align-center">
                      <a href="" className="pl-12 flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                        <span>Info Tarif</span>
                      </a>
                    </li>
                    <li className="flex flex-col justify-between align-center">
                      <a href="" className="pl-12 flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                        <span>Pelayanan Lalu Lintas</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="" className="flex py-4 px-4 hover:bg-[#477eb1c5]">
                  <i><MapPinIcon className="w-6 text-white mr-2"/></i>
                  <span>Lokasi Terdekat</span>
                </a>
              </li>
              <li onClick={toggleMediaSubMenu}>
                <span href="" className="cursor-pointer flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                  <div className="flex">
                    <i><RssIcon className="w-6 text-white mr-2"/></i>
                    <span>Media</span>
                  </div>
                  <ChevronRightIcon className="w-4 text-white" />
                </span>
                {isMediaSubMenuOpen && (
                  <ul>
                    <li className="flex flex-col justify-between align-center">
                      <a href="" className="pl-12 flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                        <span>Press Release</span>
                      </a>
                    </li>
                    <li className="flex flex-col justify-between align-center">
                      <a href="" className="pl-12 flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                        <span>Artikel</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={toggleKerjasamaSubMenu}>
                <span href="" className="cursor-pointer flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                  <div className="flex">
                    <i><UserGroupIcon className="w-6 text-white mr-2"/></i>
                    <span>Kerjasama</span>
                  </div>
                  <ChevronRightIcon className="w-4 text-white" />
                </span>
                {isKerjasamaSubMenuOpen && (
                  <ul>
                    <li className="flex flex-col justify-between align-center">
                      <a href="" className="pl-12 flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                        <span>Billboard</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="" className="flex py-4 px-4 hover:bg-[#477eb1c5]">
                  <i><PhoneIcon className="w-6 text-white mr-2"/></i>
                  <span>Hubungi Kami</span>
                </a>
              </li>
              <li>
                <a href="" className="flex py-4 px-4 hover:bg-[#477eb1c5]">
                  <i><StarIcon className="w-6 text-white mr-2"/></i>
                  <span>Membership</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default Sidebar