import Link from "next/link";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Designer } from "@/types/designer.types";
import { getDesigners } from "@/actions/designer.action";

function SelectDesigner() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [designers, setDesigners] = useState<Designer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadDesigners() {
      try {
        setIsLoading(true);
        const data = await getDesigners();
        setDesigners(data);
      } catch (error) {
        console.error("Failed to load designers:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadDesigners();
  }, []);

  return (
    <>
      <Label htmlFor="designer">Select Designer</Label>
      <div className="w-full sm:w-6/12">
        <Controller
          name="designerId"
          control={control}
          render={({ field }) => {
            return (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={isLoading}
              >
                <SelectTrigger id="designer" className="w-full">
                  <SelectValue
                    placeholder={
                      isLoading ? "Loading designers..." : "Select designer"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {designers.map((designer) => (
                    <SelectItem key={designer.id} value={designer.id}>
                      {designer.name} {designer.lastName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            );
          }}
        />
      </div>

      <p className="text-sm text-muted-foreground">
        Don't see the designer?{" "}
        <Link
          href={"/designers/add"}
          title="Go to designer form"
          className="text-blue-400 underline italic"
        >
          Add them here.
        </Link>
      </p>
      {errors.designerId && (
        <p className="text-sm text-red-500">
          {errors.designerId.message as string}
        </p>
      )}
    </>
  );
}

export default SelectDesigner;
