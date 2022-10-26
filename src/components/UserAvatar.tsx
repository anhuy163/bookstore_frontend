import { Avatar } from "antd";
import { AVATAR_SIZE } from "../constants";
import Link from "next/link";

export default function UserAvatar({ size }) {
  return (
    <Link href={"/me"}>
      <Avatar
        size={size}
        src='https://genk.mediacdn.vn/2018/9/14/vegeta-1536891801159352673517.jpg'
      />
    </Link>
  );
}
