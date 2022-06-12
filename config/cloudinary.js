import cloudinary from "cloudinary";

export const cloudinaryUpload = async (filePath) => {
    return new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload(
            filePath,
            {},
            function (error, result) {
                if (error) reject(error);
                resolve(result);
            }
        );
    });
};