import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <nav className='flex flex-col gap-6 items-center  justify-centre bg-slate-600 text-white h-screen w-40 float-left sm:float-none sm:w-full sm:h-auto sm:flex-row sm:justify-between sm:px-10'>
        <ol className='flex flex-col gap-4 py-2 items-center sm:flex-row'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Career">Career</Link></li>
            <li><Link href="/ContactUs">Contact Us</Link></li>
        </ol>
            <div className='flex flex-col gap-4 items-center sm:flex-row'>
            <Link href="/login" className='px-3 rounded-full bg-cyan-400 text-slate-600 text-sm font-bold'>Login</Link>
            <Link href="/signup" className='px-3 rounded-full bg-cyan-400 text-slate-600 text-sm font-bold'>SignUp</Link>
            </div>
      </nav>
    </div>
  )
}

export default Header
