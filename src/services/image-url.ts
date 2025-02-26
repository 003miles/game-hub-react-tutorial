
const getCroppedImageUrl = (url: string) => {
  // TODO fix this function
  if (!url) return "";

  const target = "media/"
  const index = url.indexOf(target) + target.length
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default getCroppedImageUrl;