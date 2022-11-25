import { Modal, Button, Form, Input, Tabs, Typography, Image } from "antd";
import {} from "@ant-design/icons";
import FormWrapper from "../FormWrapper";
import styles from "./styles.module.less";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import { formatMoney } from "../../app/helpers/moneyhelper";

export default function PopupPayCart({ data, loading, onFinish, ...props }) {
  const rules = {
    province: [{ required: true, message: "Vui lòng nhập địa chỉ nhận hàng" }],
    district: [{ required: true, message: "Vui lòng nhập địa chỉ nhận hàng" }],
    wards: [{ required: true, message: "Vui lòng nhập địa chỉ nhận hàng" }],
    address_detail: [
      { required: true, message: "Vui lòng nhập địa chỉ nhận hàng" },
    ],
    phone: [{ required: true, message: "Vui lòng nhập SĐT người nhận" }],
  };

  const ordersDetail = (
    <FormWrapper loading={loading}>
      <div className={styles.orderBookDetail}>
        {data?.cartItemResponses.map((book) => {
          return (
            <div key={book.bookId} className={styles.bookDetail}>
              <Image className={styles.orderBookImage} src={book?.bookAva} />
              <div className={styles.bookPriceAndQuantity}>
                <Typography className={styles.orderBookName}>
                  {book?.bookName}
                </Typography>
                <Typography className={styles.orderBookQuantity}>
                  Số lượng: {book?.quantity}
                </Typography>
                <Typography className={styles.orderBookPrice}>
                  Giá: {formatMoney(book?.priceNow)}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.orderInforDetail}>
        <Typography className={styles.orderInforQuantity}>
          Số lượng:{" "}
          <Typography style={{ marginLeft: "10px" }}>{data?.total}</Typography>
        </Typography>
        <Typography className={styles.orderInforPrice}>
          Giá đơn hàng:{" "}
          <Typography style={{ marginLeft: "10px" }}>
            {formatMoney(data?.totalPrice)}
          </Typography>
        </Typography>
      </div>
    </FormWrapper>
  );

  const inforForm = (
    <FormWrapper loading={loading}>
      <Form
        onFinish={onFinish}
        colon={false}
        initialValues={{
          phone: JSON.parse(localStorage.getItem("currentUser"))?.phone,
        }}>
        <Form.Item
          label='Tỉnh/Thành phố'
          name={"province"}
          rules={rules.province}>
          <Input allowClear />
        </Form.Item>
        <Form.Item label='Quận/Huyện' name={"district"} rules={rules.district}>
          <Input allowClear />
        </Form.Item>
        <Form.Item label='Thôn/Xóm' name={"wards"} rules={rules.wards}>
          <Input allowClear />
        </Form.Item>
        <Form.Item
          label='Chi tiết'
          name={"address_detail"}
          rules={rules.address_detail}>
          <Input.TextArea maxLength={100} allowClear />
        </Form.Item>
        <Form.Item label='Chú thích' name={"note"}>
          <Input.TextArea maxLength={200} allowClear />
        </Form.Item>
        <Form.Item label='Số điện thoại' name={"phone"} rules={rules.phone}>
          <Input />
        </Form.Item>
        <div>
          <Button onClick={props.onCancel}>Hủy</Button>
          <Button htmlType='submit'>Xác nhận</Button>
        </div>
      </Form>
    </FormWrapper>
  );

  const items = [
    {
      label: "Đơn hàng",
      key: "order",
      children: ordersDetail,
    },
    {
      label: "Thông tin người nhận",
      key: "info",
      children: inforForm,
    },
  ];

  return (
    <Modal
      {...props}
      destroyOnClose={true}
      footer={null}
      title={"Thanh toán"}
      className={styles.container}
      width={900}
      //   onCancel={props.onCancel()}
    >
      <Tabs items={items} />
    </Modal>
  );
}
