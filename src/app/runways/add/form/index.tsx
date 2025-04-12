"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ConfirmDialog from "./dialogs/confirm-dialog";
import DesignerSection from "./designer";
import ImageUploadSection from "./image-upload";
import SelectBrandCollection from "./brand-collection/select-brand";
import AddYoutubeLink from "./yt";
import { FormData, runwaySchema } from "../schema";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

export default function RunwayUploadForm() {
  const methods = useForm<FormData>({
    resolver: zodResolver(runwaySchema),
  });

  const { handleSubmit, formState } = methods;
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleCreateClick = handleSubmit((data) => {
    setFormData(data);
    setConfirmDialogOpen(true);
  });

  const handleConfirm = async () => {
    if (!formData) return;

    try {
      console.log("Submitting data:", formData);

      const response = await fetch("/api/runways", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      setConfirmDialogOpen(false);
      showSuccessToast("Runway created successfully");
    } catch (error) {
      showErrorToast("Error submitting data");
      console.log(error);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={(e) => e.preventDefault()}>
          <SelectBrandCollection />
          <AddYoutubeLink />

          <div className="mb-4">
            <DesignerSection />
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
            <ImageUploadSection />
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
      />
    </>
  );
}
