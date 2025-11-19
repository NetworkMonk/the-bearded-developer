import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Card({
  logo,
  image,
  colorClass,
  title,
  link,
  children,
}) {
  return (
    <div className="shadow-lg rounded-2xl bg-white border border-gray-200 text-center overflow-hidden relative flex flex-col h-full">
      <div className="p-6">
        {logo && (
          <FontAwesomeIcon
            icon={logo}
            size="3x"
            className="mx-auto my-4 opacity-80"
          />
        )}
        <h3 className="text-center font-semibold text-xl">{title}</h3>
      </div>
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="absolute bottom-0 left-0 w-full opacity-75 pointer-events-none"
      />
      <div className="px-6 py-3 relative flex-1">
        <div className="">{children}</div>
      </div>
      <div className={`px-6 pb-6 relative`}>
        <p className="mt-4">
          <a
            href={link}
            className="inline-block my-4 px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-500"
          >
            Learn More
          </a>
        </p>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/30 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
