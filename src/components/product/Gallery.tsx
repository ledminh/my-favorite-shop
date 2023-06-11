import { ComponentWithChildren } from "@/types";
import Image from "next/image";

type Props = {
  images: { id: string; src: string; alt: string }[];
};

export default function Gallery({ images }: Props) {
  return (
    <Wrapper>
      <MainImage>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </MainImage>
      <ThumbnailList>
        {images.map((image) => (
          <Thumbnail key={image.id}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Thumbnail>
        ))}
      </ThumbnailList>
    </Wrapper>
  );
}

/************************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
};

const MainImage: ComponentWithChildren = ({ children }) => {
  return <div className="col-span-2">{children}</div>;
};

const ThumbnailList: ComponentWithChildren = ({ children }) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

const Thumbnail: ComponentWithChildren = ({ children }) => {
  return <div className="flex-1">{children}</div>;
};
