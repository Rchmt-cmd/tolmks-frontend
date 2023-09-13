"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import useAuth from "@/app/libs/auth/useAuth"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [errors, setErrors] = useState([])

  const {login, isLoading, user} = useAuth({middleware: 'guest'})

  if(isLoading || user) {
    return (
      <div className="bg-white h-10 min-[548px]:w-[550px] min-[992px]:w-[880px] w-[95%]  shadow-md mx-auto p-8 rounded-lg"></div>
    )
  }

  const submitForm = async event => {
      event.preventDefault()

      login({email, password, setErrors});
  }

  return (
    <div className="bg-white min-[548px]:w-[550px] min-[992px]:w-[880px] w-[95%] flex flex-row shadow-md mx-auto rounded-lg">
      <div className="bg-[#F5F5F5] p-6 hidden min-[992px]:flex min-[992px]:flex-col min-[992px]:justify-center rounded-l-md w-1/2">
        <Image 
            src='/Logo_MMN_JTSE.png' 
            width={300} 
            height={23} 
            alt="logo" 
            className="mx-auto"
        />
      </div>
      <div className="min-[992px]:w-1/2 w-full p-6 flex-col justify-between">
        <h1 className="text-xl mb-3 font-medium">Login</h1>
        <p className="mb-4 text-base font-normal">Selamat datang, harap isi email & password untuk masuk.</p>
        <form onSubmit={submitForm} autoComplete="off">
          <input value={email} onChange={event => setEmail(event.target.value)} placeholder="Email" className="block focus:border-[#975AFF] focus-visible:border-[#975AFF] w-full mb-6 bg-white py-1.5 px-3 rounded-md border border-[#E0E0E0]" type="email" name="email" id="email" />
          <input value={password} onChange={event => setPassword(event.target.value)} placeholder="Password" className="block focus:border-[#975AFF] focus-visible:border-[#975AFF] w-full mb-3 bg-white py-1.5 px-3 rounded-md border border-[#E0E0E0]" type="password" name="password" id="password" />
          <Link href="/" className="text-sm text-[#124c83] mb-6 block">Kembali ke halaman utama</Link>
          <div className="flex flex-col min-[576px]:justify-between min-[576px]:flex-row">
            <Link href="/register" className="block hover:bg-[#975AFF] hover:text-white text-center min-[576px]:mb-0 mb-3 text-[#124c83] bg-[#D5F1FD] font-normal py-1.5 px-5 rounded-md text-base">Registrasi</Link>
            <button type="submit" className="block hover:shadow-lg text-white bg-[#124C83] rounded-md py-1.5 px-5">Masuk</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login