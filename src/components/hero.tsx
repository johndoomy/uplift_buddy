import Image from 'next/image';
import { Nothing_You_Could_Do } from 'next/font/google';
import { Reenie_Beanie } from 'next/font/google';
import { Gochi_Hand } from 'next/font/google';
import { Covered_By_Your_Grace } from 'next/font/google';
import { Shadows_Into_Light_Two } from 'next/font/google';
import { Over_the_Rainbow } from 'next/font/google';
import heroImage from 'public/images/uplift-buddy-hero-7.png';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

const nanum = Reenie_Beanie({ weight: '400', subsets: ['latin'] });

export default function Hero() {
  return (
    <div className="relative w-screen" style={{ height: '70vh' }}>
      <div className="absolute inset-0">
        <Image
          priority
          alt="group of people holding phonse and recieving uplifting messages"
          src={heroImage}
          fill
          objectFit="cover"
        />
      </div>
      <div
        className="flex flex-col justify-center text-center items-center"
        style={{ height: '38vh' }}
      >
        <h1 className={`z-10 w-60 text-3xl lg:text-5xl ${nanum.className}`}>
          Brighten Your Day With A Message!
        </h1>
        <div className="text-center ">
          <Link href="./onboarding">
            <Button className="bg-[#feba1f] mt-4" size="lg" radius="lg">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <div
          className="absolute bottom-0 bg-white z-10 flex justify-around items-center rounded-t-lg"
          style={{ height: '15vh', width: '75vw' }}
        >
          <Button>About</Button>
          <Button>Policy</Button>
          <Button>Social</Button>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black  bottom-0"></div> */}
        </div>
      </div>
    </div>
  );
}
