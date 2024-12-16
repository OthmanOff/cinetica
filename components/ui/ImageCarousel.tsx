import { Image as ImageType } from "@/entities/Image";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const baseUrl = "https://image.tmdb.org/t/p/w500";

const ImageCarousel = ({ images }: { images: ImageType[] }) => {
  return (
    <div>
      <p className="text-3xl mt-4">Images :</p>
      <div className="flex flex-col p-2">
        <Carousel>
          <CarouselContent>
            {images?.map((image) => (
              <CarouselItem
                key={image.file_path}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <Image
                  src={baseUrl + image.file_path}
                  alt="poster"
                  className="w-full h-full object-cover"
                  width="300"
                  height="100"
                ></Image>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
