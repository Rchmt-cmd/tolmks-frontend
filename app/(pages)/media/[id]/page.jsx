import Image from "next/image"

const Page = ({params}) => {
  return (
    <div className="text-[#3A354F] bg-[#f7f7f8] w-full py-4 px-4 sm:px-10">
      <div className="bg-white rounded-md shadow-md p-6">
        <div className="relative w-full h-[150vh] mb-4">
          <Image
            src='/hceu7901 (1).JPG'
            fill='true'
            alt="thumbnail"
            className="absolute top-0 left-0 object-cover"
          />
        </div>
        <div className="text-[#17102F]">
          <p className="text-[#124c83] text-sm mb-4 font-normal">2023-04-14 14:59:55</p>
          <h3 className="font-medium text-xl mb-4">PT Makassar Metro Network dan PT Jalan Tol Seksi Empat beri Santunan Ke Panti Asuhan</h3>
          <p className="mb-4 font-normal text-base">Makassar April 2023, PT Makassar Metro Network dan PT Jalan Tol Seksi Empat selaku Badan Usaha Jalan Tol Makassar, dalam momen bulan suci Ramadhan 1444 Hijriah memberikan santunan sekaligus melaksanakan buka puasa bersama Anak Yatim. Buka puasa dengan tema “Menebar kebahagiaan dengan jalan silaturahmi, bersama meraih berkah dibulan Suci Ramadhan” digelar di phinisi ballroom hotel claro makassar, yang dihadiri oleh ratusan anak yatim dari panti asuhan Al – Hijrah dan panti asuhan Annur Muhasin. Dalam kesempatan tersebut dihadiri pula oleh Dirut PT Makassar Metro Network Ismail Malliungan, Dirut PT Jalan Tol Seksi Empat Real Chandra, Kasat Shabara Polrestabes Makassar, AKBP Baharuddin SE.MM, Mitra dan seluruh karyawan/karyawati lingkup PT. Makassar Metro Network – PT Jalan Tol Seksi Empat. Dalam dua tahun terakhir pada masa pandemic Covid-19, kami tidak melaksanakan kegiatan berbuka puasa bersama, namun seiring dengan melandainya Covid-19, dan juga secara bersamaan pemerintah telah melonggarkan aturan tentang pembatasan kegiatan, sehingga kami tahun ini melaksanakan kegiatan berbuka puasa Bersama Adik-adik dari panti asuhan dan juga seluruh karyawan PT Makassar Metro Networ dan PT Jalan Tol Seksi Empat, sekaligus mempererat silaturahmi antar karyawan dan juga kepada mitra dalam lingkup jalan tol makassar. Ucap Ismail Malliungan selaku Direktur Utama PT Makassar Metro Network. Pemberian santunan diserahkan langsung oleh Dirut PT JTSE, Real Chandra kepada perwakilan Panti Asuhan An Nur Muhasin, sedangkan untuk panti asuhan Al – Hijrah diserahkan oleh Dirut PT MMN Ismail Malliungan. Buka puasa ini semakin hikmat dengan ceramah yang disampaikan langsung oleh Ustadz Drs. H. Arifuddin Lewa, S.HI. , MA dengan tema “Menjalin Ukhuwah Islamiyah dalam bulan suci Ramadhan”.</p>
        </div>
      </div>
    </div>
  )
}

export default Page