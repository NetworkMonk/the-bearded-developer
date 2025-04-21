import Image from "next/image";
import { useState } from "react";
import FullScreenImage from "./FullScreenImage";

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 w-full">
        {images.map((galleryImage, galleryImageIndex) => {
          return (
            <div key={galleryImageIndex} className="">
              <Image
                alt=""
                width={480}
                height={480}
                src={galleryImage}
                className="object-cover w-full cursor-pointer shadow-sm hover:scale-105 hover:shadow-xl transition-all duration-200"
                onClick={() => {
                  setSelectedImage(galleryImage);
                }}
              />
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
