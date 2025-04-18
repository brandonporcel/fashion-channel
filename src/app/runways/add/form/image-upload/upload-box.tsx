import { useRef } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type UploadBoxProps = {
  isEmpty: boolean;
  reachedLimit: boolean;
  dragActive: boolean;
  onDragEnter: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function UploadBox({
  isEmpty,
  reachedLimit,
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
      if (!reachedLimit && fileInputRef.current) {
        fileInputRef.current.click();
      }
    }
  };

  return (
    <div
      role="button"
      tabIndex={reachedLimit ? -1 : 0}
      onClick={() => {
        if (!reachedLimit && fileInputRef.current) {
          fileInputRef.current.click();
        }
      }}
      onKeyDown={handleKeyDown}
      onDragEnter={!reachedLimit ? onDragEnter : undefined}
      onDragLeave={!reachedLimit ? onDragLeave : undefined}
      onDragOver={!reachedLimit ? onDragOver : undefined}
      onDrop={!reachedLimit ? onDrop : undefined}
      className={cn(
        "border border-dashed rounded-md flex flex-col items-center justify-center outline-none focus:ring-2 focus:ring-ring",
        dragActive ? "border-primary bg-primary/10" : "border-muted-foreground",
        isEmpty ? "col-span-4 aspect-[4/1]" : "aspect-square",
        reachedLimit
          ? "opacity-50 cursor-not-allowed bg-muted"
          : "cursor-pointer"
      )}
    >
      <Plus
        className={cn(
          "h-6 w-6 mb-2",
          reachedLimit ? "text-muted-foreground/50" : "text-muted-foreground"
        )}
      />
      <p
        className={cn(
          "text-sm text-center px-2",
          reachedLimit ? "text-muted-foreground/50" : "text-muted-foreground"
        )}
      >
        {isEmpty
          ? "Click or drag and drop to upload images"
          : reachedLimit
          ? "Maximum images reached"
          : "Add more"}
      </p>
      <input
        disabled={reachedLimit}
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
