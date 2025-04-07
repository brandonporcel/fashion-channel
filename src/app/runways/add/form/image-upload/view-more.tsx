type ViewMoreProps = {
  count: number;
  onClick: () => void;
};

export function ViewMore({ count, onClick }: ViewMoreProps) {
  return (
    <div
      className="aspect-square border rounded-md overflow-hidden flex items-center justify-center cursor-pointer bg-muted/50"
      onClick={onClick}
    >
      <div className="text-center">
        <p className="text-sm font-medium">View all</p>
        <p className="text-xs text-muted-foreground">{count} images</p>
      </div>
    </div>
  );
}
