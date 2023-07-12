'use client'
import { HomeIcon, UserIcon, HandThumbUpIcon, MapPinIcon, RssIcon, PhoneIcon, StarIcon, UserGroupIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const Navbar = () => {
  return (
    <ul className="hidden w-full relative xl:flex justify-around bg-[#f7f7f8] border-t-[2px] py-2 px-4  border-t-[#d23b48] border-b-[2px] border-b-gray-300">
      <li className=''>
        <Link href="/" className='group hover:bg-[#25507d] px-3 py-2 rounded flex justify-between'>
          <i><HomeIcon className='mr-2 group-hover:text-white inline h-5 text-[#25507d] font-medium' /></i>
          <span className='group-hover:text-white text-[#25507d] font-medium'> Beranda</span>
        </Link>
      </li>
      <li className='group/main'>
        <span className='cursor-pointer group-hover/main:bg-[#25507d] px-3 py-2 rounded flex justify-between align-middle'>
          <i><UserIcon className='mr-2 group-hover/main:text-white inline h-5 text-[#25507d] font-medium' /></i>
          <span className='group-hover/main:text-white text-[#25507d] font-medium'> Tentang Kami</span> 
        </span>
        <ul className='hidden group-hover/main:block absolute shadow-md bg-white border-[#E0E0E0] border rounded '>
          <li className='group/item py-2.5 ps-5 border-b hover:bg-[#b6c4d1] relative'>
            <span className='cursor-pointer flex w-48 justify-between flex-row'>
              <span className='text-[#342E49]'>Gambaran Umum</span>
              <span><ChevronRightIcon className='mr-2 text-[#342E49] inline w-3' /></span>
            </span>
            <ul className='hidden group-hover/item:block absolute top-0 -right-[295px] shadow-md bg-white border-[#E0E0E0] border rounded'>
              <li>
                <Link href="/profile" className='py-2.5 px-5 border-b hover:bg-[#b6c4d1] flex'>
                  <span>Profil Perusahaan</span>
                </Link>
              </li>
              <li>
                <Link href="/sejarah" className='py-2.5 px-5 border-b hover:bg-[#b6c4d1] flex'>
                  <span>Sejarah Perusahaan</span>
                </Link>
              </li>
              <li>
                <Link href="/visi-misi" className='py-2.5 px-5 border-b hover:bg-[#b6c4d1] flex'>
                  <span>Visi & Misi dan Nilai Perusahaan</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/csr" className='py-2.5 px-5 border-b hover:bg-[#b6c4d1] flex'>
              <span>CSR</span>
            </Link>
          </li>
        </ul>
      </li>
      <li className='group'>
        <span className='cursor-pointer group-hover:bg-[#25507d] px-3 py-2 rounded flex justify-between align-middle'>
          <i><HandThumbUpIcon className='mr-2 group-hover:text-white inline h-5 text-[#25507d] font-medium' /></i>
          <span className='group-hover:text-white text-[#25507d] font-medium'> Layanan Jalan Tol </span>
        </span>
        <ul className='hidden group-hover:block absolute shadow-md bg-white border-[#E0E0E0] border rounded'>
          <li>
            <Link href="/struk" className='py-2.5 px-5 border-b hover:bg-[#b6c4d1] flex pr-24 '>
              <span>Cetak Struk</span>
            </Link>
          </li>
          <li>
            <Link href="/tarif" className='py-2.5 px-5 border-b hover:bg-[#b6c4d1] flex pr-24 '>
              <span>Info Tarif</span>
            </Link>
          </li>
          <li>
            <Link href="/call-center" className='py-2.5 px-5 border-b hover:bg-[#b6c4d1] flex pr-24 '>
              <span>Pelayanan Lalu Lintas</span>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/nearby" className='group hover:bg-[#25507d] px-3 py-2 rounded flex justify-between'>
          <i><MapPinIcon className='mr-2 group-hover:text-white inline h-5 text-[#25507d] font-medium' /></i>
          <span className='group-hover:text-white text-[#25507d] font-medium'> Lokasi Terdekat</span>
        </Link>
      </li>
      <li className='group'>
        <span className='cursor-pointer group-hover:bg-[#25507d] px-3 py-2 rounded flex justify-between align-middle'>
          <i><RssIcon className='mr-2 group-hover:text-white inline h-5 text-[#25507d] font-medium' /></i>
          <span className='group-hover:text-white text-[#25507d] font-medium'> Media</span>
        </span>
        <ul className='hidden group-hover:block absolute shadow-md bg-white border-[#E0E0E0] border rounded'>
          <li>
            <Link href="#" className='py-2.5 px-5 border-b hover:bg-[#b6c4d1] pr-24 flex'>
              <span>Press Release</span>
            </Link>
          </li>
          <li>
            <Link href="/media" className='py-2.5 px-5 border-b hover:bg-[#b6c4d1] pr-24 flex'>
              <span>Artikel</span>
            </Link>
          </li>
        </ul>
      </li>
      <li className='group'>
        <span className='cursor-pointer group-hover:bg-[#25507d] px-3 py-2 rounded flex justify-between'>
          <i><UserGroupIcon className='mr-2 group-hover:text-white inline h-5 text-[#25507d] font-medium' /></i>
          <span className='group-hover:text-white text-[#25507d] font-medium'> Kerjasama</span>
        </span>
        <ul className='hidden group-hover:block absolute shadow-md bg-white border-[#E0E0E0] border rounded'>
          <li>
            <Link href="/billboard" className='py-2.5 px-5 pr-28 border-b hover:bg-[#b6c4d1] flex'>
              <span>Billboard</span>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/contact-us" className='group hover:bg-[#25507d] px-3 py-2 rounded flex justify-between'>
          <i><PhoneIcon className='mr-2 group-hover:text-white inline h-5 text-[#25507d] font-medium' /></i>
          <span className='group-hover:text-white text-[#25507d] font-medium'> Hubungi Kami</span>
        </Link>
      </li>
      <li>
        <Link href="/login" className='group hover:bg-[#d23b48] px-3 py-2 rounded flex justify-between'>
          <i><StarIcon className='mr-2 group-hover:text-white inline h-5 text-[#d23b48] font-medium' /></i>
          <span className='group-hover:text-white text-[#d23b48] font-medium'> Membership</span>
        </Link>
      </li>
    </ul>
    
  )
}

export default Navbar