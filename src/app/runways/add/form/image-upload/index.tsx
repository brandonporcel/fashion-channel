"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UploadBox } from "./upload-box";
import { ImageGrid } from "./image-grid";
import { showInfoToast } from "@/utils/toast";

const LIMIT = 8;

export default function ImageUploadSection() {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();
  const [images, setImages] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      addImages(newFiles);
    }
  };

  const addImages = (newFiles: File[]) => {
    const remainingSlots = LIMIT - images.length;

    if (remainingSlots <= 0) {
      showInfoToast(`Maximum of ${LIMIT} images reached.`);
      return;
    }

    if (newFiles.length > remainingSlots) {
      const filesToAdd = newFiles.slice(0, remainingSlots);
      updateImages([...images, ...filesToAdd]);

      showInfoToast(
        `Only ${remainingSlots} of ${newFiles.length} images were added due to the ${LIMIT} image limit.`
      );
    } else {
      updateImages([...images, ...newFiles]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      addImages(newFiles);

      // Reset the input value so the same files can be selected again
      e.target.value = "";
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    updateImages(newImages);
  };

  const handleClearAll = () => {
    updateImages([]);
  };

  // Update both local state and form value
  const updateImages = (newImages: File[]) => {
    setImages(newImages);
    setValue("images", newImages, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleViewMore = () => {
    // This would open a gallery modal in the future
    console.log("View more images clicked");
  };

  return (
    <div className="mb-6">
      <Label>Images</Label>
      <p className="text-sm text-muted-foreground mb-2">
        Upload photos of your favorite pics/clothes of the runway. (
        {images.length}/{LIMIT})
      </p>

      <div className="grid grid-cols-4 gap-4">
        <UploadBox
          isEmpty={images.length === 0}
          reachedLimit={images.length === LIMIT}
          dragActive={dragActive}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onFileChange={handleFileChange}
        />

        <ImageGrid
          images={images}
          onRemove={handleRemoveImage}
          onViewMore={handleViewMore}
        />
      </div>
      {errors.images && (
        <p className="text-sm text-red-500">
          {errors.images.message as string}
        </p>
      )}
      {images.length > 0 && (
        <div className="mt-2 flex justify-end">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleClearAll}
            className="cursor-pointer"
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
}
