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
  const { brandName, brandDialogOpen, onConfirm, setBrandDialogOpen } = props;

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
              value={brandName}
              onChange={(e) => console.log("onChange", e.target.value)}
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
          <Button type="button" onClick={onConfirm}>
            Add Brand
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateBrandDialog;
