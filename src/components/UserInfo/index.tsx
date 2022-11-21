import { Button, Form, Input, Typography, Tooltip } from "antd";
import styles from "./styles.module.less";
import UserAvatar from "../UserAvatar";
import FormWrapper from "../FormWrapper";
import { AVATAR_SIZE } from "../../constants";
import { EditOutlined } from "@ant-design/icons";
import { useForm } from "antd/lib/form/Form";
import { useEffect, useState } from "react";
import PopupChangePasswordContainer from "../../containers/PopupChangePassword";
import UploadAvatarContainer from "../../containers/UploadAvatar";
import { RcFile } from "antd/lib/upload";

export default function UserInfo({
  defaultValues = undefined,
  onChange,
  loading,
  ...props
}) {
  const [togglePopupChangepw, setTogglePopupChangepw] = useState(false);
  const handleOpenPopupChangepw = () => {
    setTogglePopupChangepw(true);
  };
  const onCancelPopupChangepw = () => {
    setTogglePopupChangepw(false);
  };
  const [form] = useForm();
  useEffect(() => {
    form.setFieldsValue({
      password: defaultValues?.email,
      username: defaultValues?.email,
      name: defaultValues?.surname + " " + defaultValues?.name,
      phone: defaultValues?.phone || null,
      address: defaultValues?.address || null,
    });
  }, []);
  const rules = {
    name: [{ required: true, message: "Vui lòng không để trống" }],
    phone: [{ required: true, message: "Vui lòng không để trống" }],
    address: [{ required: true, message: "Vui lòng không để trống" }],
  };
  const [base64img, setBase64Img] = useState("");
  const getBase64Img = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };
  const onImgChangeHandler = (img) => {
    getBase64Img(img as RcFile, (url) => setBase64Img(url));
    onChange(img);
  };
  return (
    <>
      <div className={styles.infoWrapper}>
        <FormWrapper className={styles.formWrapper} loading={loading}>
          <div className={styles.avatar}>
            <UserAvatar
              size={AVATAR_SIZE.large}
              src={defaultValues?.avatar}
              text={defaultValues?.name}
              base64ImgUrl={base64img}
            />
            <div className={styles.uploadAvatarBtn}>
              <UploadAvatarContainer onChange={onImgChangeHandler} />
            </div>
          </div>

          <Form form={form} {...props}>
            <Form.Item label='Tài khoản' colon={false} name='username'>
              <Input bordered={false} readOnly />
            </Form.Item>
            <div className={styles.password}>
              <Form.Item label='Mật khẩu' colon={false} name='password'>
                <Input.Password bordered={false} readOnly />
              </Form.Item>
              <Tooltip placement='right' title='Đổi mật khẩu'>
                <Button
                  onClick={handleOpenPopupChangepw}
                  className={styles.changePwBtn}
                  icon={<EditOutlined />}
                />
              </Tooltip>
            </div>
            <Form.Item
              label='Họ và tên'
              colon={false}
              rules={rules.name}
              name='name'>
              <Input />
            </Form.Item>
            <Form.Item
              label='Điện thoại'
              colon={false}
              rules={rules.phone}
              name='phone'>
              <Input />
            </Form.Item>
            <Form.Item
              label='Địa chỉ'
              colon={false}
              rules={rules.address}
              name='address'>
              <Input />
            </Form.Item>
            <div className={styles.buttonArea}>
              <Button htmlType='submit'>Xác nhận</Button>
            </div>
          </Form>
        </FormWrapper>
      </div>
      <PopupChangePasswordContainer
        open={togglePopupChangepw}
        onCancel={onCancelPopupChangepw}
      />
    </>
  );
}
