import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={
          "https://i.pinimg.com/originals/38/96/7d/38967db0a59694c460173e5c60595998.gif"
        }
        alt="joan of arc alexander mcqueen hero"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b to-black flex items-start justify-center pt-20">
        <h1 className="tracking-tighter bg-clip-text inline-block text-transparent bg-gradient-to-r from-slate-800 to-slate-900 sm:text-9xl font-bold opacity-40 select-none">
          Fashion Channel
        </h1>
      </div>
    </div>
  );
}
