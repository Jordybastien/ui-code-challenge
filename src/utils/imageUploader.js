export const uploadImages = async (images) =>
  Promise.all(
    images.map(async (image) => {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "cakgs8ec");
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dodfpnbik/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();

      return file.secure_url;
    })
  );
