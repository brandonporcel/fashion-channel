import { X } from "lucide-react";
import { useState } from "react";

type ImageThumbnailProps = {
  file: File;
  index: number;
  onRemove: (index: number) => void;
};

export function ImageThumbnail({ file, index, onRemove }: ImageThumbnailProps) {
  const [imageUrl] = useState(() => URL.createObjectURL(file));

  return (
    <div className="relative group aspect-square border rounded-md overflow-hidden">
      <img
        src={imageUrl || "/placeholder.svg"}
        alt={`Upload ${index + 1}`}
        className="w-full h-full object-cover"
      />
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onRemove(index);
        }}
        className="absolute top-1 right-1 bg-black/70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-primary hover:text-white"
      >
        <X size={16} />
      </button>
    </div>
  );
}
