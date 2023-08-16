import UnsafeComponent from '@/app/_components/UnsafeComponent'
import getVisiMisi from '@/app/libs/getVisiMisi'
import Image from 'next/image'
import React from 'react'

export default async function VisiMisi() {
  const visiMisiData = await getVisiMisi()

  return (
    <div className='text-[#3A354F] grid grid-cols-1 gap-1 bg-[#f7f7f8] w-full py-6 px-6 md:px-10'>
      <div className='mb-3'>
        <h1 className="font-medium text-2xl mb-3 ">Visi & Misi Perusahaan | <span className="text-sm italic text-[#BDBDBD]">Vision and Mission</span></h1>
        <div className='flex justify-between flex-col md:flex-row bg-white rounded-lg shadow-md p-6'>
          <div className='w-full md:w-1/3 text-center mr-6 text-[##342E49]'>
            <UnsafeComponent html={visiMisiData.data.visi_misi.konten} />
          </div>
          <div className='relative h-96 w-full md:w-2/3 lg:h-[100vh] '>
            <Image
              src={`http://127.0.0.1:8000/${visiMisiData.data.visi_misi.image}`}
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
                src={`http://127.0.0.1:8000/${visiMisiData.data.visi_misi.image2}`}
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
          {visiMisiData.data.nilai.map(item => {
            return (
              <>
                <div className='p-6 bg-white rounded-lg shadow-md flex sm:flex-row flex-col justify-center align-center sm:justify-start'>
                  <div className='relative mx-auto w-28 h-28 sm:mr-3 sm:mx-0'>
                    <Image
                      src={`http://127.0.0.1:8000/${item.icon}`}
                      key={item.id}
                      fill='true'
                      alt="icon-growing"
                      className="absolute top-0 right-0 object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h1 className='text-2xl mb-3 font-medium'>{item.judul}</h1>
                    <p className='text-base mb-3'>{item.deskripsi}</p>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div> 
    </div>
  )
}