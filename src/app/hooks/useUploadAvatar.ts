import { access_key, secret_key } from "../../utils";
import S3 from "react-aws-s3-typescript";
import { createRandomImageKey } from "../helpers/textHelper";

const config = {
  bucketName: "bookstoreimages",
  region: "us-east-1",
  accessKeyId: access_key,
  secretAccessKey: secret_key,
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
