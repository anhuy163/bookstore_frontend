import UserInfo from "../../components/UserInfo";
import { useAppSelector, useAppDispatch } from "../../app/hooks/useRedux";
import { useState } from "react";
import useUploadAvatar from "../../app/hooks/useUploadAvatar";
import useMutationUpdateUserProfile from "../../app/hooks/useMutationUpdateUserProfile";
import useQueryGetUserProfile from "../../app/hooks/useQueryGetUserProfile";
import { setUser } from "../../app/redux/slices/userSlice";

export default function UserInfoContainer() {
  const { data: user, loading: gettingUser } = useQueryGetUserProfile();
  const { doMutation: updateProfile, loading: updatingProfile } =
    useMutationUpdateUserProfile();
  const { uploadAvatar } = useUploadAvatar();
  // const user = useAppSelector((state) => state.user);
  const [img, setImg] = useState();
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const onChange = (img) => {
    setImg(img);
  };
  // console.log(img);
  // console.log(uploadingAvatar);
  const dispatch = useAppDispatch();

  const getImageName = async (image) => {
    try {
      setUploadingAvatar(true);
      const res = await uploadAvatar(image);
      console.log(res);
      setUploadingAvatar(false);
      return res?.location;
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleOnSubmit = async (value) => {
    let avatar;
    if (img) {
      avatar = await getImageName(img);
    }
    updateProfile({
      avatar: avatar ? avatar : user.avatar,
      name: value?.name,
      phone: value?.phone,
      surname: value?.firstname,
    });
  };
  return (
    <div>
      <UserInfo
        defaultValues={user}
        onFinish={handleOnSubmit}
        onChange={onChange}
        loading={uploadingAvatar || updatingProfile || gettingUser}
      />
    </div>
  );
}
