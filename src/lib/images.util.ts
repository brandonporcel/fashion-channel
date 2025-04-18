export const compressImage = async (
  file: File,
  maxWidth = 320,
  quality = 0.1
): Promise<File> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      if (!e.target?.result) return reject("Error loading image");
      image.src = e.target.result as string;
    };

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const scaleFactor = maxWidth / image.width;
      canvas.width = Math.min(image.width, maxWidth);
      canvas.height = image.height * scaleFactor;

      const ctx = canvas.getContext("2d");
      ctx?.drawImage(image, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(
        (blob) => {
          if (!blob) return reject("Compression failed");
          const compressedFile = new File([blob], file.name, {
            type: file.type,
            lastModified: Date.now(),
          });
          resolve(compressedFile);
        },
        file.type,
        quality // between 0 and 1
      );
    };

    image.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
};
