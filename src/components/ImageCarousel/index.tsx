import useElementAboveFold from "@/hooks/useElementAboveFold";
import { images } from "@/utils/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

type ImageSlideProps = {
  image: {
    id: string;
    url: string;
  };
  index: number;
  setCurrentSlide: Function;
};

const ImageSlide = ({
  image: { id, url },
  index,
  setCurrentSlide,
}: ImageSlideProps) => {
  const { containerRef, isVisible } = useElementAboveFold({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisible) {
      setCurrentSlide(index);
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="inline-block min-w-full justify-center items-center scroll-px-4 snap-center snap-always h-[420px] lg:h-[480px] relative"
    >
      <Image src={url} alt={id} fill style={{ objectFit: "contain" }} />
    </div>
  );
};

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <div className="text-center overflow-hidden">
        <div className="imagecarousel flex flex-row lg:flex-col lg:gap-[8px] flex-1 overflow-x-auto snap-x snap-mandatory scroll-smooth">
          {images.map((image, index) => (
            <ImageSlide
              image={image}
              key={image.id}
              index={index}
              setCurrentSlide={setCurrentSlide}
            />
          ))}
        </div>
      </div>
      <div className="flex lg:hidden gap-[8px] justify-center align-center pt-[12px]">
        {Array.from(Array(images.length)).map((_, index: number) => (
          <button
            key={`dot_${index}`}
            aria-label={`Go to Slide ${index + 1}`}
            className={`rounded-full w-[16px] h-[2px] bg-black ${
              currentSlide !== index ? " opacity-25 " : ""
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default ImageCarousel;
