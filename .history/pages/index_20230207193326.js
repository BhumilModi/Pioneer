import { Space_Grotesk } from '@next/font/google';
import Image from 'next/image';

const font = Space_Grotesk({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`bg-black text-white h-screen flex flex-col justify-center items-center ${font.className}`}>
      <div className='flex h-[100px]'>
        <Image src="/Logo_Pioneer.svg" width={75} height={32} />
        <div className='text-[48px] px-3 pt-2 font-semibold'>PIONEER</div>
      </div>
    </div>
  )
}
