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

function DesignerSection() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Label htmlFor="designer">Select Designer</Label>
      <div className="w-full sm:w-6/12">
        <Controller
          name="designerId"
          control={control}
          render={({ field }) => {
            return (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger id="designer" className="w-full">
                  <SelectValue placeholder="Select designer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john-galliano">John Galliano</SelectItem>
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

export default DesignerSection;
