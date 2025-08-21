import Image from "next/image";
import useSwipe from "@/hooks/useSwipe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faClose } from "@fortawesome/free-solid-svg-icons";

export default function FullScreenImage(props) {
  const { selectedImage, setSelectedImage, allImages } = props;

  const selectedIndex = allImages.findIndex((image) => image === selectedImage);
  const nextIndex =
    selectedIndex >= allImages.length - 1 ? 0 : selectedIndex + 1;
  const previousIndex =
    selectedIndex <= 0 ? allImages.length - 1 : selectedIndex - 1;

  const swipeHandlers = useSwipe({
    onSwipedLeft: () => setSelectedImage(allImages[nextIndex]),
    onSwipedRight: () => setSelectedImage(allImages[previousIndex]),
  });

  return (
    <div className="fixed z-[100] top-0 left-0 right-0 bottom-0 max-h-100vh flex flex-col bg-black/90 select-none">
      <div>
        <div className="max-w-xl mx-auto flex p-4">
          <div className="grow text-left">
            <a
              className="w-6 h-6 cursor-pointer inline-block mr-5 text-white"
              onClick={() => setSelectedImage(allImages[previousIndex])}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" />
            </a>
            <a
              className="w-6 h-6 cursor-pointer inline-block text-white"
              onClick={() => setSelectedImage(allImages[nextIndex])}
            >
              <FontAwesomeIcon icon={faArrowRight} className="w-6 h-6" />
            </a>
          </div>
          <div>
            <a
              className="w-6 h-6 cursor-pointer text-white"
              onClick={() => setSelectedImage(false)}
            >
              <FontAwesomeIcon icon={faClose} className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="grow max-h-full">
        <Image
          alt=""
          width={1920}
          height={1080}
          src={selectedImage}
          className="object-contain w-full h-full"
          {...swipeHandlers}
        />
      </div>
    </div>
  );
}
