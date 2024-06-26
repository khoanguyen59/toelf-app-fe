const CANVAS_CONTEXT_2D = '2d';
export const BASE64_KEY = 'base64';

export const getBase64 = async (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      }
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

export const checkImageTransparency = (image: HTMLImageElement): boolean => {
  let hasAlphaPixels = false;

  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;

  const context = canvas.getContext(CANVAS_CONTEXT_2D);
  context.drawImage(image, 0, 0);

  const imageData = context.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  ).data;

  for (let i = 3, n = imageData.length; i < n; i += 4) {
    if (imageData[i] < 255) {
      hasAlphaPixels = true;
      break;
    }
  }

  return hasAlphaPixels;
};

export const acceptedFiles = (file: File, acceptedFiles: string): boolean => {
  if (file && acceptedFiles) {
    const acceptedFilesArray = Array.isArray(acceptedFiles)
      ? acceptedFiles
      : acceptedFiles.split(',');
    const fileName = file.name || '';
    const mimeType = (file.type || '').toLowerCase();
    const baseMimeType = mimeType.replace(/\/.*$/, '');

    return acceptedFilesArray.some((type) => {
      const validType = type.trim().toLowerCase();
      if (validType.charAt(0) === '.') {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith('/*')) {
        return baseMimeType === validType.replace(/\/.*$/, '');
      }
      return mimeType === validType;
    });
  }
  return true;
};
