"use client";
import { useState, ChangeEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CrateBrandDialogProps } from "../types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function CreateBrandDialog(props: CrateBrandDialogProps) {
  const [name, setName] = useState("");
  const { brandDialogOpen, onConfirm, setBrandDialogOpen } = props;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Dialog open={brandDialogOpen} onOpenChange={setBrandDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Brand</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="new-brand">Brand Name</Label>
            <Input
              id="new-brand"
              value={name}
              onChange={onChange}
              placeholder="Enter brand name"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => setBrandDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button type="button" onClick={(e) => onConfirm(name)}>
            Add Brand
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateBrandDialog;
