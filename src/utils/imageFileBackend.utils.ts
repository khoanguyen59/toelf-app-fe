const getImageFile = async (
  assetId: string,
  assetType: string,
  assetName: string
): Promise<File> => {
  const imageUrl = `${process.env.REACT_APP_BACKEND_URL}/asset/image-file/${assetId}`;
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch image: ${response.status} ${response.statusText}`
      );
    }

    const blob = await response.blob();
    const file = new File([blob], assetName, { type: assetType });
    return file;
  } catch (error) {
    throw new Error('Failed to fetch image, Please try again later.');
  }
};

export { getImageFile };
