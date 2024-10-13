'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const Signup = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900'>
    <Card className='bg-gray-200 dark:bg-gray-500 shadow-2xl'>
      <div>
      <CardHeader className='text-center space-y-4'>
          <CardTitle className='font-extrabold'>CREATE ACCOUNT</CardTitle>
          <CardDescription>Enter your Name E-mail and password to Signup</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex gap-3'>
          <Input 
          placeholder='First Name'
          type='text'
          />
          <Input 
          placeholder='Last Name'
          type='text'
          />
        </div>
        <div>
          <Label
          htmlFor="email"
          className='font-bold'
          ></Label>
          <Input 
          id='email'
          placeholder='Enter your E-mail'
          type='email'
          required
          />
        </div>
        <div>
          <Label
          htmlFor='password'
          className='font-bold space-y-2'
          ></Label>
          <Input 
          id='password'
          placeholder='Enter your password'
          type='password'
          required
          />
        </div>
        <div>
          <Label
          htmlFor='password'
          className='font-bold space-y-2'
          ></Label>
          <Input 
          id='password'
          placeholder='Re-enter your password'
          type='password'
          required
          />
        </div>
        <div className='flex justify-center items-center gap-2'>
        <Link href= "/login">
        <Button className='w-full bg-red-700 hover:bg-red-500'>Create Account</Button>
        </Link>
        </div>
      </CardContent>
      </div>
    </Card>
  </div>

  )
}

export default Signup
