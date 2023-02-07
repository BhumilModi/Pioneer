import { Space_Grotesk } from '@next/font/google';
import Image from 'next/image';

const inter = Space_Grotesk({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`bg-black text-white h-screen flex flex-col justify-center items-center ${inter.className}`}>
      <div className='flex h-[100px]'>
        <Image src="/Logo_Pioneer.svg" width={75} height={32} />
        <div className='text-[48px] px-3 pt-2 font-semibold'>PIONEER</div>
      </div>
      <div className='text-[82px] flex justify-center font-semibold w-[1152px]' >
        <div className='text-[#24FF00] pr-[40px]'>Connect</div>
        <div>with friends and </div>
      </div>
      <div className='text-[82px] text-center font-semibold w-[1152px] '>loved ones effortlessly.</div>
      <div>
        Let’s get started!
      </div>
    </div>
  )
}
