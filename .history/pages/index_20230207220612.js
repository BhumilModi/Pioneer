import { Space_Grotesk } from '@next/font/google';
import Image from 'next/image';

const inter = Space_Grotesk({ subsets: ['latin'] })

export default function Home() {
  return (
    <div class="bg-[url('/bg-lines.svg')] bg-black bg-no-repeat bg-center">
      <div className={` text-white h-screen flex flex-col justify-center items-center ${inter.className}`}>
        <div className='flex h-[100px]'>
          <Image src="/Logo_Pioneer.svg" width={75} height={32} />
          <div className='text-[48px] px-3 pt-3 font-semibold'>PIONEER</div>
        </div>
        <div className='text-[72px] flex justify-center font-semibold w-[1152px]' >
          <div className='text-[#24FF00] pr-[40px]'>Connect</div>
          <div>with friends and </div>
        </div>
        <div className='text-[72px] text-center font-semibold w-[1152px] '>loved ones effortlessly.</div>
        <div className='text-[36px] font-semibold pt-16'>
          Let’s get started!
        </div>
        <button className='bg-white rounded-3xl text-[24px] font-semibold mt-10 mb-15 text-black p-2 px-5 hover:text-white hover:bg-black hover:border-2'>
          Connect Wallet
        </button>
      </div>
    </div>
  )
}
