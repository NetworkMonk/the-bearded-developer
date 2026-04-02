import Image from "next/image";
import { useState } from "react";
import FullScreenImage from "./FullScreenImage";

export default function Gallery({ images, alts = [] }) {
  const [selectedImage, setSelectedImage] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 w-full">
        {images.map((galleryImage, galleryImageIndex) => {
          return (
            <div
              key={galleryImageIndex}
              className="relative h-36 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(galleryImage)}
            >
              <Image
                alt={alts[galleryImageIndex] || ""}
                fill
                src={galleryImage}
                className="object-cover group-hover:scale-105 transition-all duration-200"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm0 0l2 2" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
      {selectedImage !== false && (
        <FullScreenImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          allImages={images}
          key={selectedImage}
        />
      )}
    </>
  );
}
