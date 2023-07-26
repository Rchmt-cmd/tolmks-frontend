import Image from 'next/image'
import React from 'react'

const VisiMisi = () => {
  return (
    <div className='text-[#3A354F] grid grid-cols-1 gap-1 bg-[#f7f7f8] w-full py-6 px-6 md:px-10'>
      <div className='mb-3'>
        <h1 className="font-medium text-2xl mb-3 ">Visi & Misi Perusahaan | <span className="text-sm italic text-[#BDBDBD]">Vision and Mission</span></h1>
        <div className='flex justify-between flex-col md:flex-row bg-white rounded-lg shadow-md p-6'>
          <div className='w-full md:w-1/3 text-center mr-6 text-[##342E49]'>
            <div>
              <h1 className='text-2xl font-extrabold mb-3'>Visi</h1>
              <p className='mb-4 font-bold'>Menjadi salah satu Perusahaan Jalan Tol Nasional terkemuka dengan fokus membangun jalan-jalan yang strategis.</p>
            </div>
            <div>
              <h1 className='text-2xl font-extrabold mb-3'>Misi</h1>
              <p className='mb-4 font-bold'>Berupaya mencapai pertumbuhan jangka panjang yang berkelanjutan dan meningkatkan nilai tambah pemegang saham dengan senantiasa mengoperasikan Jalan Tol secara efisien dan memberikan pelayanan optimal.</p>
            </div>
          </div>
          <div className='relative h-96 w-full md:w-2/3 lg:h-[100vh] '>
            <Image
              src='/paradaeng.jpeg'
              fill='true'
              alt="para-daeng"
              className="absolute top-0 right-0 object-contain"
            />
          </div>
        </div>
      </div>
      <div className='mb-3'>
        <h1 className="font-medium text-2xl mb-3 ">Kebijakan Manajemen Sistem | <span className="text-sm italic text-[#BDBDBD]">Management Policy System</span></h1>
        <div className='p-6 bg-white rounded-lg shadow-md'>
          <div className='relative h-96 md:h-[100vh]'>
            <Image
                src='/terbaik.jpeg'
                fill='true'
                alt="terbaik"
                className="absolute top-0 right-0 object-contain rounded-lg"
            />
          </div>
        </div>
      </div> 
      <div className='mb-3'>
        <h1 className="font-medium text-2xl mb-3 ">Nilai Perusahaan | <span className="text-sm italic text-[#BDBDBD]">Company Value</span></h1>
        <div className='grid md:grid-cols-2 grid-cols-1 grid-flow-row gap-4'>
          <div className='p-6 bg-white rounded-lg shadow-md flex sm:flex-row flex-col justify-center align-center sm:justify-start'>
            <div className='relative mx-auto w-28 h-28 sm:mr-3 sm:mx-0'>
              <Image
                src='/icon_growing.png'
                fill='true'
                alt="icon-growing"
                className="absolute top-0 right-0 object-contain rounded-lg"
              />
            </div>
            <div>
              <h1 className='text-2xl mb-3 font-medium'>Growth</h1>
              <p className='text-base mb-3'>Menjadi besar dan semakin cepat seiring berjalan waktu</p>
            </div>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md flex sm:flex-row flex-col justify-center align-center sm:justify-start'>
            <div className='relative mx-auto w-28 h-28 sm:mr-3 sm:mx-0'>
              <Image
                src='/icon_reliable.png'
                fill='true'
                alt="icon-reliable"
                className="absolute top-0 right-0 object-contain rounded-lg"
              />
            </div>
            <div>
              <h1 className='text-2xl mb-3 font-medium'>Reliable</h1>
              <p className='text-base mb-3'>Mewujudkan komitmen dengan standar yang tinggi</p>
            </div>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md flex sm:flex-row flex-col justify-center align-center sm:justify-start'>
            <div className='relative mx-auto w-28 h-28 sm:mr-3 sm:mx-0'>
              <Image
                src='/icon_optimistic.png'
                fill='true'
                alt="icon-optimistic"
                className="absolute top-0 right-0 object-contain rounded-lg"
              />
            </div>
            <div>
              <h1 className='text-2xl mb-3 font-medium'>Optimistic</h1>
              <p className='text-base mb-3'>Memiliki impian dan percaya diri dalam menyongsong masa depan</p>
            </div>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md flex sm:flex-row flex-col justify-center align-center sm:justify-start'>
            <div className='relative mx-auto w-28 h-28 sm:mr-3 sm:mx-0'>
              <Image
                src='/icon_willing.png'
                fill='true'
                alt="icon-willing"
                className="absolute top-0 right-0 object-contain rounded-lg"
              />
            </div>
            <div>
              <h1 className='text-2xl mb-3 font-medium'>Willing</h1>
              <p className='text-base mb-3'>Selalu siap dan bersemangat untuk bekerja lebih</p>
            </div>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md flex sm:flex-row flex-col justify-center align-center sm:justify-start'>
            <div className='relative mx-auto w-28 h-28 sm:mr-3 sm:mx-0'>
              <Image
                src='/icon_teamup.png'
                fill='true'
                alt="icon-teamup"
                className="absolute top-0 right-0 object-contain rounded-lg"
              />
            </div>
            <div>
              <h1 className='text-2xl mb-3 font-medium'>Team Up</h1>
              <p className='text-base mb-3'>Satu Tim, Satu Rencana, Satu Tujuan</p>
            </div>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md flex sm:flex-row flex-col justify-center align-center sm:justify-start'>
            <div className='relative mx-auto w-28 h-28 sm:mr-3 sm:mx-0'>
              <Image
                src='/icon_harmonious.png'
                fill='true'
                alt="icon-harmonious"
                className="absolute top-0 right-0 object-contain rounded-lg"
              />
            </div>
            <div>
              <h1 className='text-2xl mb-3 font-medium'>Harmonious</h1>
              <p className='text-base mb-3'>Selalu bersama dalam keharmonisan</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default VisiMisi