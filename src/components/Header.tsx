import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <nav className='flex gap-4 items-center justify-between bg-slate-600 text-white h-10'>
        <ol className='flex gap-8 ml-16'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Career">Career</Link></li>
            <li><Link href="/ContactUs">Contact Us</Link></li>
        </ol>
            <div>
            <Link href="/login" className='mr-5 px-3 py-0.5 rounded-full bg-cyan-400 text-slate-600  font-bold'>Login</Link>
            <Link href="/signup" className='mr-36 px-3 py-0.5 rounded-full bg-cyan-400 text-slate-600  font-bold'>SignUp</Link>
            </div>
      </nav>
    </div>
  )
}

export default Header
