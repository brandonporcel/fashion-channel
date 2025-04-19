import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { COLLECTIONS } from "@/data/collection.data";

function SelectCollection() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 40 }, (_, i) => currentYear - i);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-1">
      <div className="w-full sm:w-6/12 md:w-full">
        <Label htmlFor="collection">Collection</Label>
        <Controller
          control={control}
          name="collectionType"
          render={({ field }) => {
            return (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="collection" className="w-full">
                  <SelectValue placeholder="Select collection" />
                </SelectTrigger>
                <SelectContent>
                  {COLLECTIONS.map((collection) => (
                    <SelectItem key={collection.id} value={collection.id}>
                      {collection.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            );
          }}
        />
        {errors.collectionType && (
          <p className="text-sm text-red-500">
            {errors.collectionType.message as string}
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
                value={field.value?.toString() ?? ""}
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
  );
}

export default SelectCollection;
