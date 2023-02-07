import { Inter } from '@next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-black text-white h-screen flex flex-col justify-center items-center'>
      <div>
        <Image src="/Logo_Pioneer.svg" width={75} height={32} />
      </div>
    </div>
  )
}
