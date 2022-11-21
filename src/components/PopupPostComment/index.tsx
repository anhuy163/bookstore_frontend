import { Modal, Form, Input, Button, Rate } from "antd";
import {} from "@ant-design/icons";
import styles from "./styles.module.less";
import FormWrapper from "../FormWrapper";
import { useForm } from "antd/lib/form/Form";

export default function PopupPostComment({
  visible,
  loading,
  onCancel,
  onFinish,
  ...props
}) {
  const [form] = useForm();
  const handleOnSubmit = (value) => {
    onFinish(value, onCancel());
  };

  const rules = {
    title: [
      { required: true, message: "Vui lòng không để trống", whitespace: true },
      { max: 20, message: "Độ dài tối đa 20 ký tự" },
    ],
    content: [
      { required: true, message: "Vui lòng không để trống", whitespace: true },
      { max: 100, message: "Độ dài tối đa 100 ký tự" },
    ],
    star: [{ required: true, message: "Vui lòng không để trống" }],
  };

  return (
    <Modal
      className={styles.postCommentModal}
      open={visible}
      footer={false}
      closable={false}
      destroyOnClose>
      <FormWrapper className={styles.formWrapper} loading={loading}>
        <Form onFinish={handleOnSubmit} colon={false}>
          <Form.Item rules={rules.title} label='Tiêu đề' name={"title"}>
            <Input />
          </Form.Item>
          <Form.Item rules={rules.content} label='Nội dung' name={"content"}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item rules={rules.star} label='Đánh giá' name={"star"}>
            <Rate />
          </Form.Item>
          <div className={styles.btnArea}>
            <Button className={styles.cancelBtn} onClick={onCancel}>
              Hủy bỏ
            </Button>
            <Button className={styles.postCmtBtn} htmlType='submit'>
              Gửi
            </Button>
          </div>
        </Form>
      </FormWrapper>
    </Modal>
  );
}
