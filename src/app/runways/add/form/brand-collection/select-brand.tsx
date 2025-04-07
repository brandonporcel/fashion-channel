"use client";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import CreateBrandDialog from "../dialogs/create-brand-dialog";

function SelectBrandCollection() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [brandDialogOpen, setBrandDialogOpen] = useState(false);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 40 }, (_, i) => currentYear - i);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <div>
          <Label htmlFor="brand">Brand</Label>
          <Controller
            name="brandId"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger id="brand" className="w-full">
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="martin-margiela">
                    Martin Margiela
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <div>
            <p className="text-sm text-muted-foreground">
              Don't see the brand?{" "}
              <span
                onClick={() => setBrandDialogOpen(true)}
                title="Create new brand"
                className="text-blue-400 underline italic cursor-pointer"
              >
                Add it here
              </span>
            </p>
            {errors.brandId && (
              <p className="text-sm text-red-500">
                {errors.brandId.message as string}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-4">
          <div className="w-full sm:w-1/2">
            <Label htmlFor="collection">Collection</Label>
            <Controller
              control={control}
              name="collectionId"
              render={({ field }) => {
                return (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger id="collection" className="w-full">
                      <SelectValue placeholder="Select collection" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spring-2023">Spring Summer</SelectItem>
                      <SelectItem value="fall-2023">Fall Winter</SelectItem>
                    </SelectContent>
                  </Select>
                );
              }}
            />
            {errors.collectionId && (
              <p className="text-sm text-red-500">
                {errors.collectionId.message as string}
              </p>
            )}
          </div>
          <div className="w-full sm:w-1/2">
            <Label htmlFor="date">Year</Label>
            <Controller
              control={control}
              name="year"
              render={({ field }) => {
                return (
                  <Select
                    onValueChange={(value: string) => field.onChange(+value)}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pick year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              }}
            />
            {errors.year && (
              <p className="text-sm text-red-500">
                {errors.year.message as string}
              </p>
            )}
          </div>
        </div>
      </div>
      <CreateBrandDialog
        brandName={""}
        brandDialogOpen={brandDialogOpen}
        setBrandDialogOpen={setBrandDialogOpen}
        onConfirm={() => {
          console.log("Confirm");
        }}
      />
    </>
  );
}

export default SelectBrandCollection;
