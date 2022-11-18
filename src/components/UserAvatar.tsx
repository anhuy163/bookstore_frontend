import { Avatar } from "antd";
import { AVATAR_SIZE } from "../constants";
import Link from "next/link";
import { getFirstLetterOfName } from "../app/helpers/textHelper";

export default function UserAvatar({
  size,
  src = undefined,
  base64ImgUrl = undefined,
  text = "",
  link = undefined,
}) {
  return !!link ? (
    <Link href={"/me"}>
      {!!src ? (
        <Avatar
          style={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
            fontSize: size === AVATAR_SIZE.large ? "100px" : "24px",
          }}
          size={size}
          src={!!base64ImgUrl ? base64ImgUrl : src}
        />
      ) : (
        <Avatar
          style={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
            fontSize: size === AVATAR_SIZE.large ? "100px" : "24px",
            // alignItems: "center",
          }}
          size={size}
          src={!!base64ImgUrl ? base64ImgUrl : src}>
          {getFirstLetterOfName(text)}
        </Avatar>
      )}
    </Link>
  ) : (
    <Avatar
      style={{
        color: "#f56a00",
        backgroundColor: "#fde3cf",
        fontSize: size === AVATAR_SIZE.large ? "100px" : "24px",
        border: "0.1px solid rgb(170, 164, 164)",
      }}
      size={size}
      src={!!base64ImgUrl ? base64ImgUrl : src}>
      {getFirstLetterOfName(text)}
    </Avatar>
  );
}
