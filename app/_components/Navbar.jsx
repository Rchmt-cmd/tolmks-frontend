'use client'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import useAuth from '../libs/auth/useAuth'

const Navbar = () => {
  const {user, logout} = useAuth()

  // console.log(user)

  return (
    <ul className="hidden w-full relative xl:flex justify-around bg-[#f7f7f8] border-t-[2px] py-2 px-5  border-t-[#d23b48] border-b-[2px] border-b-gray-300">
      <li className=''>
        <Link href="/" className='group hover:bg-[#25507d] px-3 py-2 rounded flex items-center'>
          <i className='mr-2'>
            <svg className='group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#25507d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          </i>
          <span className='group-hover:text-white text-[#25507d] font-medium text-base'> Beranda</span>
        </Link>
      </li>
      <li className='group/main'>
        <span className='cursor-pointer group-hover/main:bg-[#25507d] px-3 py-2 rounded flex items-center'>
          <i className='mr-2'>
            <svg className='group-hover/main:stroke-white' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#25507d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </i>
          <span className='group-hover/main:text-white text-[#25507d] font-medium text-base'> Tentang Kami</span> 
        </span>
        <ul className='hidden group-hover/main:block absolute shadow-md bg-white border-[#E0E0E0] border rounded '>
          <li className='group/item py-2.5 ps-5 border-b hover:bg-[#b6c4d1] relative'>
            <span className='cursor-pointer flex w-48 justify-between flex-row'>
              <span className=''>Gambaran Umum</span>
              <span><ChevronRightIcon className='mr-2  inline w-3' /></span>
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
        <span className='cursor-pointer group-hover:bg-[#25507d] px-3 py-2 rounded flex items-center'>
          <i className='mr-2'>
            <svg className='group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#25507d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
          </i>
          <span className='group-hover:text-white text-[#25507d] font-medium text-base'> Layanan Jalan Tol </span>
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
        <Link href="/nearby" className='group hover:bg-[#25507d] px-3 py-2 rounded flex items-center'>
          <i className='mr-2'>
            <svg className='group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#25507d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </i>
          <span className='group-hover:text-white text-[#25507d] font-medium text-base'> Lokasi Terdekat</span>
        </Link>
      </li>
      <li className='group'>
        <span className='cursor-pointer group-hover:bg-[#25507d] px-3 py-2 rounded flex items-center'>
          <i className='mr-2'>
            <svg className='group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#25507d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rss"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
          </i>
          <span className='group-hover:text-white text-[#25507d] font-medium text-base'> Media</span>
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
        <span className='cursor-pointer group-hover:bg-[#25507d] px-3 py-2 rounded flex items-center'>
          <i className='mr-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 640 512"><path className='group-hover:fill-white' fill='#25507d' d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"/></svg>
          </i>
          <span className='group-hover:text-white text-[#25507d] font-medium text-base'> Kerjasama</span>
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
        <Link href="/contact-us" className='group hover:bg-[#25507d] px-3 py-2 rounded flex items-center'>
          <i className='mr-2'>
            <svg className='group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#25507d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </i>
          <span className='group-hover:text-white text-[#25507d] font-medium text-base'> Hubungi Kami</span>
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
      </>
       : 
      <>
        <li>
          <Link href="/login" className='group hover:bg-[#d23b48] px-3 py-2 rounded flex items-center'>
            <i className='mr-2'>
              <svg className='group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d23b48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </i>
            <span className='group-hover:text-white text-[#d23b48] font-medium'> Membership</span>
          </Link>
        </li>  
      </>}
    </ul>
    
  )
}

export default Navbar