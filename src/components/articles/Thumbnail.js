import Image from "next/image";

export default function Thumbnail({ image }) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl">
      <Image
        alt=""
        width={480}
        height={480}
        src={image}
        className="object-cover w-full shadow-xs hover:scale-105 hover:shadow-xl transition-all duration-200"
      />
    </div>
  );
}
