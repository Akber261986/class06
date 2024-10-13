'use client'

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const Login = () => {
  
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900'>
      <Card className='bg-gray-200 dark:bg-gray-500 shadow-2xl'>
        <div>
        <CardHeader className='text-center space-y-4'>
            <CardTitle className='font-extrabold text-2xl'>LOGIN</CardTitle>
            <CardDescription>Enter your E-mail and password to login</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div>
            <Label
            htmlFor="email"
            className='font-bold'
            >E-mail</Label>
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
            >Password</Label>
            <Input 
            id='password'
            placeholder='Enter your password'
            type='password'
            required
            />
          </div>
          <div className='flex justify-center items-center gap-2'>
          <Link href="/">
          <Button className='w-full'>Login</Button>
          </Link>
          <span>or</span>
          <Link href= "/signup">
          <Button className='w-full bg-red-700 hover:bg-red-500'>Create Account</Button>
          </Link>
          </div>
        </CardContent>
        </div>
      </Card>
    </div>
  )
}

export default Login
