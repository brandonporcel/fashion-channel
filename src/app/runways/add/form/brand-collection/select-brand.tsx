"use client";
import { useState, useEffect } from "react";
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
import { createBrand, getBrands } from "@/actions/brand.action";
import { Brand } from "@/types/brand.types";

function SelectBrand() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [brandDialogOpen, setBrandDialogOpen] = useState(false);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadBrands() {
      try {
        setIsLoading(true);
        const data = await getBrands();
        setBrands(data);
      } catch (error) {
        console.error("Failed to load brands:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadBrands();
  }, []);

  return (
    <>
      <div>
        <Label htmlFor="brand">Brand</Label>
        <Controller
          name="brandId"
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              disabled={isLoading}
            >
              <SelectTrigger id="brand" className="w-full">
                <SelectValue
                  placeholder={isLoading ? "Loading brands..." : "Select brand"}
                />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem key={brand.id} value={brand.id}>
                    {brand.name}
                  </SelectItem>
                ))}
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
      <CreateBrandDialog
        brandDialogOpen={brandDialogOpen}
        setBrandDialogOpen={setBrandDialogOpen}
        onConfirm={async (brandName) => {
          const newBrand = await createBrand(brandName);
          setBrands([...brands, newBrand]);
          setBrandDialogOpen(false);
        }}
      />
    </>
  );
}

export default SelectBrand;
