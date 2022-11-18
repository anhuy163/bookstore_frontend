import UserInfo from "../../components/UserInfo";
import { useAppSelector } from "../../app/hooks/useRedux";
import { useState } from "react";

export default function UserInfoContainer() {
  const user = useAppSelector((state) => state.user);
  const [img, setImg] = useState();
  const onChange = (img) => {
    setImg(img);
  };
  console.log(img);

  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <div>
      <UserInfo defaultValues={user} onFinish={onFinish} onChange={onChange} />
    </div>
  );
}
