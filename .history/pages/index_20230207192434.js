import { GoogleFonts } from "next-google-fonts";
import Image from 'next/image';


export default function Home() {
  return (
    <GoogleFonts>
      <div className='bg-black text-white h-screen flex flex-col justify-center items-center'>
        <div className='flex h-[100px]'>
          <Image src="/Logo_Pioneer.svg" width={75} height={32} />
          <div className='text-[48px] px-3 pt-2 font-semibold'>PIONEER</div>
        </div>
      </div>
    </GoogleFonts>
  )
}
