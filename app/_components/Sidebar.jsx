'use client'
import { HomeIcon, UserIcon, HandThumbUpIcon, MapPinIcon, RssIcon, PhoneIcon, StarIcon, UserGroupIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link";
import { useState } from "react";
import useAuth from '../libs/auth/useAuth'


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

  const {user, logout} = useAuth()

  return (
    <div className="w-full relative top-0 xl:hidden bg-slate-400 overflow-x-hidden bg-opacity-50">
          <div className="text-white h-[100rem] overflow-auto bg-[#124c83] w-[250px] bg-opacity-95">
            <ul>
              <li>
                <Link href="/" className="flex py-4 px-4 hover:bg-[#477eb1c5]">
                  <i><HomeIcon className="w-6 text-white mr-2"/></i>
                  <span>Beranda</span>
                </Link>
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
                            <Link href="/profile" className="flex pl-20 py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                              <span>Profil Perusahaan</span>
                            </Link>
                          </li>
                          <li className="flex flex-col justify-between align-center">
                            <Link href="/sejarah" className="flex pl-20 py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                              <span>Sejarah Perusahaan</span>
                            </Link>
                          </li>
                          <li className="flex flex-col justify-between align-center">
                            <Link href="/visi-misi" className="flex pl-20 py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                              <span>Visi & Misi dan Tujuan Perusahaan</span>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="flex flex-col justify-between align-center">
                      <Link href="/csr" className="pl-12 flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                        <span>CSR</span>
                      </Link>
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
                      <Link href="/struk" className="pl-12 flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                        <span>Cetak Struk</span>
                      </Link>
                    </li>
                    <li className="flex flex-col justify-between align-center">
                      <Link href="/tarif" className="pl-12 flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                        <span>Info Tarif</span>
                      </Link>
                    </li>
                    <li className="flex flex-col justify-between align-center">
                      <Link href="/call-center" className="pl-12 flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                        <span>Pelayanan Lalu Lintas</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/nearby" className="flex py-4 px-4 hover:bg-[#477eb1c5]">
                  <i><MapPinIcon className="w-6 text-white mr-2"/></i>
                  <span>Lokasi Terdekat</span>
                </Link>
              </li>
              <li onClick={toggleMediaSubMenu}>
                <span className="cursor-pointer flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                  <div className="flex">
                    <i><RssIcon className="w-6 text-white mr-2"/></i>
                    <span>Media</span>
                  </div>
                  <ChevronRightIcon className="w-4 text-white" />
                </span>
                {isMediaSubMenuOpen && (
                  <ul>
                    <li className="flex flex-col justify-between align-center">
                      <Link href="#" className="pl-12 flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                        <span>Press Release</span>
                      </Link>
                    </li>
                    <li className="flex flex-col justify-between align-center">
                      <Link href="/media" className="pl-12 flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                        <span>Artikel</span>
                      </Link>
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
                      <Link href="/billboard" className="pl-12 flex py-4 px-4 justify-between w-full hover:bg-[#477eb1c5]">
                        <span>Billboard</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/contact-us" className="flex py-4 px-4 hover:bg-[#477eb1c5]">
                  <i><PhoneIcon className="w-6 text-white mr-2"/></i>
                  <span>Hubungi Kami</span>
                </Link>
              </li>
              {user ? <>
                <li className='mr-2'>
                  <Link href="/profil-user" className='group hover:bg-[#25507d] px-3 py-2 rounded flex items-center'>
                    <i className='mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#25507d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path className='group-hover:stroke-white' d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle className='group-hover:stroke-white' cx="12" cy="7" r="4"></circle></svg>
                    </i>
                    <span className='group-hover:text-white text-[#25507d] font-medium text-base'> Profil</span>
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className='group hover:bg-[#25507d] px-3 py-2 rounded flex items-center'>
                    <i className='mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#25507d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path className='group-hover:stroke-white' d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline className='group-hover:stroke-white' points="16 17 21 12 16 7"></polyline><line className='group-hover:stroke-white' x1="21" y1="12" x2="9" y2="12"></line></svg>
                    </i>
                    <span className='group-hover:text-white text-[#25507d] font-medium text-base'> Keluar</span>
                  </button>
                </li>
              </> : <>
                <li>
                  <Link href="/login" className="flex py-4 px-4 hover:bg-[#477eb1c5]">
                    <i><StarIcon className="w-6 text-white mr-2"/></i>
                    <span>Membership</span>
                  </Link>
                </li>
              </>
              }
            </ul>
          </div>
        </div>
  )
}

export default Sidebar