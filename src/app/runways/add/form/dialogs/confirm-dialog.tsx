import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ConfirmDialogProps } from "../types";

function ConfirmDialog(props: ConfirmDialogProps) {
  const { confirmDialogOpen, setConfirmDialogOpen, onConfirm } = props;
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
          >
            Cancel
          </Button>
          <Button type="button" onClick={onConfirm}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmDialog;
