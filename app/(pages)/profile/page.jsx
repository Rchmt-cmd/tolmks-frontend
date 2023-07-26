import Image from 'next/image'

const Profile = () => {
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
              src='/logo_logo_mmn_jtse.jpg'
              fill='true'
              alt="logo_mmn_jtse"
              className="absolute top-0 left-0 object-cover"
              />
          </div>
          <div className='w-full md:w-3/4 p-6'>
            PT Makassar Metro Network (Perusahaan) (dahulu PT Bosowa Marga Nusantara atau BMN) didirikan berdasarkan Akta Notaris Mestariany Habie, S.H., No. 20 tanggal 12 April 1993 dan Perjanjian Usaha Patungan dengan PT Jasa Marga (Persero) Tbk No. 19 tanggal 12 April 1993 dari Notaris yang sama. Sejak tahun 1998 PT Makassar Metro Network mengoperasikan Jalan Tol Seksi 1 dan 2 sepanjang 6,6 km dan Jalan Tol Ujung Pandang Seksi 3 sepanjang 4,3 km sebagai investasi tambahan dangan kompensasi perpanjangan masa konsesi dan perubahan tarif.
          </div>
        </div>
        
        <h1 className='text-xl font-medium mt-6 mb-3'>Bidang Usaha</h1>
        <div className='font-medium flex flex-row justify-between py-2 border-y-2 border-[#E0E0E0]'>
          <span>Pengelola Jalan Tol Ruas Ujung Pandang seksi 1, 2 dan 3</span>
        </div>
        
        <h1 className='text-xl font-medium mt-6 mb-3'>Struktur Kepemilikan</h1>
        <div className='font-medium w-full h-96 flex flex-row justify-center py-2 border-t-2 border-[#E0E0E0]'>
          <div className='relative h-80 w-80 '>
            <Image
              src='/logo_logo_mmn_jtse.jpg'
              fill='true'
              alt="logo_mmn_jtse"
              className="absolute top-0 left-0 object-contain lg:object-cover"
              />
          </div>
        </div>
        
        <h1 className='text-xl font-medium mt-3 mb-3'>Sejarah Singkat Perusahaan</h1>
        <div className='font-medium flex flex-col justify-between mt-2 py-2 border-t-2 border-[#E0E0E0]'>
          <span>PT Makassar Metro Network (Perusahaan) (dahulu PT Bosowa Marga Nusantara atau BMN) didirikan berdasarkan Akta Notaris Mestariany Habie, S.H., No. 20 tanggal 12 April 1993 dan Perjanjian Usaha Patungan dengan PT Jasa Marga (Persero) Tbk No. 19 tanggal 12 April 1993 dari Notaris yang sama.  Akta Pendirian Perusahaan telah mendapat  pengesahan dari menteri kehakiman republik indonedia dalam surat keputusan No. C2-12555.HT.01.01.Th.93 tanggal 27 November 1993, dan telah diumumkan dalam berita negara republik indonesia No. 8 tanggal 27 Januari 1995 tambahan No.750 serta telah terdaftar dalam surat persetujuan penenaman modal dalam negara No. 239/IPMDN/1993 tanggal 5 Agustus 1993 yang dikeluarkan oleh badan koordinasi penanaman modal.</span><br />

          <span>Pada 2 November 2020, telah dilakukan perubahan nama perusahaan menjadi PT. Makassar Metro Network berdasarkan Akta Notaris Karin Cristina Basoeki, S.H., No. 02 tanggal 2 November 2020, yang telah disetujui oleh menteri hukum dan hak asasi manusia republik indonesia dalam surat keputusan No. AHU-0185421. AH 01.11. tanggal 5 November 2020.</span><br />

          <span>Anggaran Dasar Perusahaan telah mengalami beberapa kali perubahan, terakhir dengan Akta Citra Buana Tungga, S.H., M.Kn., No. 8 tanggal 12 Desember 2019 mengenai peningkatan modal dasar, ditempatkan dan disetor perusahaan. Perubahan tersebut telah mendapat persetujuan dari menteri hukum dan hak asasi manusia republik indonesia berdasarkan surat keputusan no. AHU-0106448. AH. 01.01 tanggal 8 Desember 2019.</span><br />

          <span>Berdasarkan pasal 3 anggaran dasar perusahaanb, maksud dan tujuan Perusahaan adalah berusaha dalam bidang pembangunan, pengoperasian dan pemeliharaan jalan tol.</span><br />

          <span>Sejak tahun 1998 PT Makassar Metro Network mengoperasikan jalan tol seksi 1 dan 2 sepanjang 6,6 km dan saat ini sedang membvangun Jalan Tol Ujung Pandang Seksi 3 sepanjang 4,3 km sebagai investasi tambagan dengan kompetensi perpajangan masa konsensasi dan perubahan tarif.</span><br />

          <span>perubahan berkedudukan di Jalan Jenderal Sudirman No. 5, Menara Bosowa lantai 4, Makassar, Sulawesi Selatan.</span><br />
        </div>

        <h1 className='text-xl font-medium mt-6 mb-3'>Sertifikasi dan Pencapaian</h1>
        <div className='w-full h-96 flex flex-col md:flex-row justify-center md:justify-start py-2 border-t-2 border-[#E0E0E0]'>
          <div className='relative h-96 w-full md:w-96 mb-4 md:mr-4 '>
            <Image
              src='/opexcon3.jpg'
              fill='true'
              alt="logo_mmn_jtse"
              className="absolute top-0 left-0 object-contain"
              />
          </div>
          <div className='relative h-96 w-full md:w-96 mb-4 md:mr-4 '>
            <Image
              src='/sgs.png'
              fill='true'
              alt="logo_mmn_jtse"
              className="absolute top-0 left-0 object-contain"
              />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Profile