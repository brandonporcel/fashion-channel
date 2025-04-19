"use client";
import { useState } from "react";
import { useForm, FormProvider, Form } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ConfirmDialog from "./dialogs/confirm-dialog";
import SelectDesigner from "./designer";
import ImageUploadSection from "./image-upload";
import SelectBrandCollection from "./brand-collection/";
import AddYoutubeLink from "./yt";
import { RunwayFormData, runwaySchema } from "../schema";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { createRunway } from "@/actions/runway.action";
import { compressImage } from "@/lib/images.util";

function RunwayUploadForm() {
  const methods = useForm<RunwayFormData>({
    resolver: zodResolver(runwaySchema),
    defaultValues: {
      brandId: "",
      collectionType: "",
      year: undefined,
      youtubeLink: "",
      designerId: "",
      description: "",
      images: [],
    },
  });

  const { handleSubmit, formState } = methods;
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [formData, setFormData] = useState<RunwayFormData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const handleCreateClick = handleSubmit((data) => {
    setFormData(data);
    setConfirmDialogOpen(true);
  });

  const handleReset = () => {
    methods.reset();
    setThumbnail("");
    setImages([]);
  };

  const parseFormValues = async (formData: RunwayFormData) => {
    const formDataObj = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "images") {
        formDataObj.append(key, value as string);
      }
    });

    if (formData.images && formData.images.length > 0) {
      for (const file of formData.images) {
        const compressedImage = await compressImage(file);
        formDataObj.append(`images`, compressedImage);
      }
    }

    return formDataObj;
  };

  const handleConfirm = async () => {
    if (!formData) return;

    setIsLoading(true);
    try {
      const formObject = await parseFormValues(formData);
      const result = await createRunway(formObject);

      if (result.error) {
        throw new Error(result.error);
      }

      setConfirmDialogOpen(false);
      showSuccessToast("Runway created successfully");
      handleReset();
    } catch (error) {
      showErrorToast("Error submitting data");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={(e) => e.preventDefault()}>
          <SelectBrandCollection />
          <AddYoutubeLink setThumbnail={setThumbnail} thumbnail={thumbnail} />

          <div className="mb-4">
            <SelectDesigner />
          </div>

          <div className="mb-4">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...methods.register("description")}
              placeholder="Enter runway description..."
              className="h-24"
            />
          </div>

          <div className="mb-6">
            <ImageUploadSection images={images} setImages={setImages} />
          </div>

          <Button
            type="button"
            className="w-full cursor-pointer"
            onClick={handleCreateClick}
            disabled={formState.isSubmitting}
          >
            Create
          </Button>
        </form>
      </FormProvider>

      <ConfirmDialog
        confirmDialogOpen={confirmDialogOpen}
        setConfirmDialogOpen={setConfirmDialogOpen}
        onConfirm={handleConfirm}
        isLoading={isLoading}
      />
    </>
  );
}

export default RunwayUploadForm;
