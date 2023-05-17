import { images } from "@/utils/constants";
import Image from "next/image";

const ImageCarousel = () => {
  return (
    <div className="text-center overflow-hidden">
      <div className="flex flex-row lg:flex-col lg:gap-[8px] flex-1 overflow-x-auto snap-x scroll-smooth">
        {images.map((image) => {
          return (
            <div
              key={image.id}
              className="inline-block min-w-full justify-center items-center snap-start h-[420px] lg:h-[480px] relative"
            >
              <Image
                src={image.url}
                alt={image.id}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
