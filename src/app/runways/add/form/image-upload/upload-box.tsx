import { useRef } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type UploadBoxProps = {
  isEmpty: boolean;
  dragActive: boolean;
  onDragEnter: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function UploadBox({
  isEmpty,
  dragActive,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onFileChange,
}: UploadBoxProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fileInputRef.current?.click();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => fileInputRef.current?.click()}
      onKeyDown={handleKeyDown}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={cn(
        "border border-dashed rounded-md cursor-pointer flex flex-col items-center justify-center outline-none focus:ring-2 focus:ring-ring",
        dragActive ? "border-primary bg-primary/10" : "border-muted-foreground",
        isEmpty ? "col-span-4 aspect-[4/1]" : "aspect-square"
      )}
    >
      <Plus className="h-6 w-6 text-muted-foreground mb-2" />
      <p className="text-sm text-muted-foreground text-center px-2">
        {isEmpty ? "Click or drag and drop to upload images" : "Add more"}
      </p>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={onFileChange}
      />
    </div>
  );
}
