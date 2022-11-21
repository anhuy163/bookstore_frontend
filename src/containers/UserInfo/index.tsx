import UserInfo from "../../components/UserInfo";
import { useAppSelector } from "../../app/hooks/useRedux";
import { useState } from "react";
import useUploadAvatar from "../../app/hooks/useUploadAvatar";

export default function UserInfoContainer() {
  const { uploadAvatar } = useUploadAvatar();
  const user = useAppSelector((state) => state.user);
  const [img, setImg] = useState();
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const onChange = (img) => {
    setImg(img);
  };
  console.log(img);

  const getImageName = async (image) => {
    try {
      setUploadingAvatar(true);
      const res = await uploadAvatar(image);
      console.log(res);
      return res;
    } catch (error) {
      console.log("error", error);
    }
    // setUploadingAvatar(false);
  };

  const handleOnSubmit = async (value) => {
    let avatar;
    if (img) {
      avatar = await getImageName(img);
    }
    console.log({ ...value, avatar });
  };
  return (
    <div>
      <UserInfo
        defaultValues={user}
        onFinish={handleOnSubmit}
        onChange={onChange}
        loading={uploadingAvatar}
      />
    </div>
  );
}
