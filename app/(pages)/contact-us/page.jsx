import Link from "next/link"

const ContactUs = () => {
  return (
    <div className="text-[#3A354F] bg-[#f7f7f8] w-full py-6 px-4 sm:px-10">
      <div className="mb-4">
        <h1 className="font-medium text-2xl ">Hubungi Kami | <span className="text-sm italic text-[#BDBDBD]">Contact Us</span></h1>
      </div>
      <div className="bg-white rounded-md shadow-md px-6 py-10 grid md:grid-cols-2 grid-cols-1 gap-3">
        <div>
          <h3 className="text-3xl font-medium mb-3 text-[#17102F]">PT Makassar Metro Network</h3>
          <h3 className="text-3xl font-medium mb-3 text-[#17102F]">PT Jalan Tol Seksi Empat</h3>
          <p className="mb-4">Menara Bosowa Lantai 4</p>
          <p className="mb-4">Jalan Jenderal Sudirman No. 5, Makassar 90115, Sulawesi Selatan - Indonesia</p>
          <p className="mb-4">Tel. +62 411 368 1035</p>
          <p className="mb-4">Fax. +62 411 368 1038</p>
          <p className="mb-4">Emergency Call. 1 500 722</p>
          <div className="flex">
            <Link href="https://www.facebook.com/groups/688279698009683" target="_blank" className="bg-[#3b5998] p-2 rounded-md text-white mr-3 w-11 h-11 flex text-2xl justify-center align-middle">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path fill="#ffffff" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
            </Link>
            <Link href="https://www.instagram.com/infotolmakassar/" target="_blank" className="bg-[#3f729b] p-2 rounded-md text-white w-11 h-11 flex text-2xl justify-center align-middle">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </Link>
          </div>
        </div>
        <div>Mapbox Here</div>
      </div>
    </div>
  )
}

export default ContactUs