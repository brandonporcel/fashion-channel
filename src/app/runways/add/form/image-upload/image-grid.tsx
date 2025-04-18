import { ImageThumbnail } from "./image-thumbnail";
import { ViewMore } from "./view-more";

type ImageGridProps = {
  images: File[];
  onRemove: (index: number) => void;
  onViewMore: () => void;
};

export function ImageGrid({ images, onRemove, onViewMore }: ImageGridProps) {
  return (
    <>
      {images.slice(0, 6).map((file, index) => (
        <ImageThumbnail
          key={`${file.name}-${index}`}
          file={file}
          index={index}
          onRemove={onRemove}
        />
      ))}

      {images.length > 7 && (
        <ViewMore count={images.length} onClick={onViewMore} />
      )}
    </>
  );
}
