export default async function getImageDimensions(file) {
  let img = document.createElement('img');
  img.src = URL.createObjectURL(file);
  await img.decode();
  let width = img.width;
  let height = img.height;
  return {
    width,
    height,
  };
}
