import { Inter } from '@next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-black text-white h-screen flex flex-col justify-center items-center'>
      <div className='flex h-[70px]'>
        <Image src="/Logo_Pioneer.svg" width={75} height={32} />
        <div className='text-[48px] px-2 pt-[-5px]'>Pioneer</div>
      </div>
    </div>
  )
}
