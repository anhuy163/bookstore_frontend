import UploadAvatar from "../../components/UploadAvatar";

export default function UploadAvatarContainer({ onChange }) {
    const onImgChangeHandler = (upload) => {
        upload.file.originFileObj && onChange(upload.file.originFileObj)
    }
    return (
        <UploadAvatar onChange={ onImgChangeHandler} />
    )
}