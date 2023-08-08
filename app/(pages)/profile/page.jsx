import UnsafeComponent from '@/app/_components/UnsafeComponent'
import getProfile from '@/app/libs/getProfile'
import Image from 'next/image'

export default async function Profile() {
  const profileData = await getProfile()
  const sertifikat1 = profileData.data.sertifikat[0].image
  const sertifikat2 = profileData.data.sertifikat[1].image

  return (
    <div className='text-[#3A354F] grid grid-cols-1 gap-1 bg-[#f7f7f8] w-full py-6 px-6 md:px-10'>
      <div className='mb-3'>
        <h1 className="font-medium text-2xl ">Profil Perusahaan | <span className="text-sm italic text-[#BDBDBD]">Company Profile</span></h1>
      </div>
      <div className='shadow-md rounded-lg p-6 bg-white'>
        <h1 className='text-xl font-medium border-b-2 border-[#F55252]'>PT MAKASSAR METRO NETWORK</h1>
        <div className='flex flex-col md:flex-row justify-between py-3 border-b-2 border-[#E0E0E0]'>
          <div className='relative h-80 lg:w-1/5 md:w-2/5'>
            <Image
              src={`http://127.0.0.1:8000/${profileData.data.profile.image}`}
              fill='true'
              alt="logo_mmn_jtse"
              className="absolute top-0 left-0 object-cover"
              />
          </div>
          <div className='w-full md:w-3/4 p-6'>
            {profileData.data.profile.konten}
          </div>
        </div>
        
        <h1 className='text-xl font-medium mt-6 mb-3'>Bidang Usaha</h1>
        <div className='font-medium flex flex-row justify-between py-2 border-y-2 border-[#E0E0E0]'>
          <span>{profileData.data.profile.bidang_usaha}</span>
        </div>
        
        <h1 className='text-xl font-medium mt-6 mb-3'>Struktur Kepemilikan</h1>
        <div className='font-medium w-full h-96 flex flex-row justify-center py-2 border-t-2 border-[#E0E0E0]'>
          <div className='relative h-80 w-80 '>
            <Image
              src={`http://127.0.0.1:8000/${profileData.data.profile.struktur}`}
              fill='true'
              alt="logo_mmn_jtse"
              className="absolute top-0 left-0 object-contain lg:object-cover"
              />
          </div>
        </div>
        
        <h1 className='text-xl font-medium mt-3 mb-3'>Sejarah Singkat Perusahaan</h1>
        <div className='font-medium flex flex-col justify-between mt-2 py-2 border-t-2 border-[#E0E0E0]'>
          <UnsafeComponent html={profileData.data.profile.sejarah} />
        </div>

        <h1 className='text-xl font-medium mt-6 mb-3'>Sertifikasi dan Pencapaian</h1>
        <div className='w-full h-96 flex flex-col md:flex-row justify-center md:justify-start py-2 border-t-2 border-[#E0E0E0]'>
          {profileData.data.sertifikat.map(item => {
            return (
              <>
                <div className='relative h-96 w-full md:w-96 mb-4 md:mr-4 '>
                  <Image
                    src={`http://127.0.0.1:8000/${item.image}`}
                    fill='true'
                    alt="logo_mmn_jtse"
                    className="absolute top-0 left-0 object-contain"
                    />
                </div>
              </>
            )
          })}
        </div>


      </div>
    </div>
  )
}

