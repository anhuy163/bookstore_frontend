import { Table, Typography, Image, Checkbox, Button, Rate } from "antd";
import {} from "@ant-design/icons";
import { formatMoney } from "../../app/helpers/moneyhelper";
import FormWrapper from "../FormWrapper";
import { dummyBookData } from "../../constants";
import styles from "./styles.module.less";
import { AlignType, FixedType } from "rc-table/lib/interface";
import { useAppSelector } from "../../app/hooks/useRedux";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);
  console.log(cart);
  console.log(dummyBookData);

  const generateColumns = () => {
    const columns = [
      {
        title: "Sản phẩm",
        width: 400,
        render: (_, record, index) => {
          return (
            <div className={styles.productImageAndInfor}>
              <Image className={styles.productImage} src={record.cover} />
              <div className={styles.productInfor}>
                <div className={styles.productTitle}>{record.title}</div>
                <div className={styles.productAuthor}>{record.author}</div>
                <div>
                  <Rate allowHalf defaultValue={record.rate} disabled />
                </div>
              </div>
            </div>
          );
        },
      },
      {
        title: "Số lượng",
        dataIndex: "amount",
        width: 70,
        align: "center" as AlignType,
        sorter: (a, b) => a.amount - b.amount,
      },
      {
        title: "Trạng thái",
        dataIndex: "status",
        align: "center" as AlignType,
        width: 80,
        render: (value, record) => {
          console.log(record);
          return <Checkbox checked={value} />;
        },
        filters: [
          {
            text: "Chọn",
            value: true,
          },
          {
            text: "Không chọn",
            value: false,
          },
        ],
        onFilter: (value, record) => record.status === value,
      },
      {
        title: "Thành tiền",
        width: 150,
        align: "center" as AlignType,
        render: (_, record) => (
          <Typography className={styles.productValue}>
            {formatMoney(record.amount * record.value)}
          </Typography>
        ),
      },
      {
        title: "Tùy chọn",
        key: "action",
        width: 100,
        fixed: "right" as FixedType,
        align: "center" as AlignType,
        render: (_, record) => (
          <Button className={styles.cartDeleteBtn}>Xóa</Button>
        ),
      },
    ];
    return columns;
  };

  return (
    <div className={styles.cartTable}>
      <Typography className={styles.cartTitle}>Giỏ hàng của bạn</Typography>
      <FormWrapper>
        <Table
          locale={{
            triggerDesc: "Nhấn để sắp xếp giảm dần",
            triggerAsc: "Nhấn để sắp xếp tăng dần",
            cancelSort: "Nhấn để hủy sắp xếp",
          }}
          pagination={false}
          scroll={{ x: 1500 }}
          bordered
          dataSource={dummyBookData}
          columns={generateColumns()}
        />
      </FormWrapper>
      <Typography className={styles.cartValueTitle}>
        Tổng:{" "}
        <Typography className={styles.cartValue}>
          {formatMoney(cart.value)}
        </Typography>
      </Typography>
    </div>
  );
}
