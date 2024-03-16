import Image from "next/image";

const Loader = () => (
  <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
    <Image
      src="/assets/loader.gif"
      alt="loader"
      width={70}
      height={70}
      className="object-contain"
    />
  </div>
);

export default Loader;
