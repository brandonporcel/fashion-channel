import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={
          "https://i.pinimg.com/originals/4b/47/24/4b472411bea28fbaf6f85845e7870831.gif"
        }
        alt="alexander mcqueen hero"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
}
