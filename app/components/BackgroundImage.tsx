import Image from 'next/image';

export default function BackgroundImage() {
  return (
    <div className="relative w-full h-[700px] opacity-40">
      <Image src="/bgImage4.png" alt="BackGroundImage" fill/>
    </div>
  );
}
