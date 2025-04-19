import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ConfirmDialogProps } from "../types";
import { Loader2 } from "lucide-react";

function ConfirmDialog(props: ConfirmDialogProps) {
  const { confirmDialogOpen, setConfirmDialogOpen, onConfirm, isLoading } =
    props;
  return (
    <Dialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Upload</DialogTitle>
        </DialogHeader>
        <p>Are you sure you want to upload this runway?</p>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => setConfirmDialogOpen(false)}
            disabled={isLoading}
            className="cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={onConfirm}
            className="cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin h-4 w-4" />
                Uploading...
              </span>
            ) : (
              "Confirm"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmDialog;
