export type CrateBrandDialogProps = {
  brandDialogOpen: boolean;
  setBrandDialogOpen: (open: boolean) => void;
  onConfirm: (brandName: string) => void;
};

export type ConfirmDialogProps = {
  confirmDialogOpen: boolean;
  setConfirmDialogOpen: (open: boolean) => void;
  onConfirm: () => void;
};

export type ImageUploadProps = {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
};
