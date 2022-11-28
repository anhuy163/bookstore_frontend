import S3 from "react-aws-s3-typescript";
import { createRandomImageKey } from "../helpers/textHelper";

const config = {
  bucketName: "bookstoreimages",
  region: "us-east-1",
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY,
  s3Url: "https://bookstoreimages.s3.amazonaws.com/",
};

const useUploadAvatar = () => {
  const ReactS3Client = new S3(config);
  const uploadAvatar = async (file) => {
    console.log(file.name);

    try {
      const res = await ReactS3Client.uploadFile(
        file,
        file?.name
        // `${createRandomImageKey(4)}_${file.name}`
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return { uploadAvatar };
};

export default useUploadAvatar;
