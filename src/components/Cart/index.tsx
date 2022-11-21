import {
  Table,
  Typography,
  Image,
  Checkbox,
  Button,
  Rate,
  InputNumber,
  Form,
  Input,
} from "antd";
import { formatMoney } from "../../app/helpers/moneyhelper";
import FormWrapper from "../FormWrapper";

import styles from "./styles.module.less";
import { AlignType, FixedType } from "rc-table/lib/interface";
import { useAppSelector } from "../../app/hooks/useRedux";
import { useState } from "react";

export default function Cart({ defaultValues, onAddBook, loading }) {
  const cart = useAppSelector((state) => state.cart);
  // console.log(cart);
  console.log(defaultValues);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  console.log(selectedRowKeys);

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys);
    },
  };

  const handleOnBookUpdate = (value) => {
    // console.log(value);
    onAddBook({
      bookId: value.bookId,
      addedQuantity: value.quantity - value.oldQuantity,
      updatedQuantity: value.quantity,
    });
  };

  const generateColumns = () => {
    const columns = [
      {
        title: "Sản phẩm",
        width: 400,
        render: (_, record, index) => {
          return (
            <div className={styles.productImageAndInfor}>
              <Image className={styles.productImage} src={record.bookAva} />
              <div className={styles.productInfor}>
                <div className={styles.productTitle}>{record.bookName}</div>
                <div className={styles.productAuthor}>{record.author}</div>
                {/* <div>
                  <Rate allowHalf defaultValue={record.rate} disabled />
                </div> */}
              </div>
            </div>
          );
        },
      },
      {
        title: "Số lượng",
        dataIndex: "quantity",
        width: 70,
        align: "center" as AlignType,
        render: (_, record) => {
          return (
            <div>
              <Form
                className={styles.updateForm}
                initialValues={{
                  bookId: record.bookId,
                  quantity: record.quantity,
                  oldQuantity: record.quantity,
                }}
                colon={false}
                onFinish={handleOnBookUpdate}>
                <Form.Item name={"bookId"} hidden>
                  <Input />
                </Form.Item>
                <Form.Item name={"quantity"}>
                  <InputNumber />
                </Form.Item>
                <Form.Item name={"oldQuantity"} hidden>
                  <Input />
                </Form.Item>
                <Button htmlType='submit'>Cap nhat</Button>
              </Form>
            </div>
          );
        },
        sorter: (a, b) => a.amount - b.amount,
      },
      {
        title: "Trạng thái",
        dataIndex: "status",
        align: "center" as AlignType,
        width: 80,
        render: (value, record) => {
          // console.log(record);
          return <Checkbox defaultChecked={record.status} />;
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
        title: "Giá",
        width: 150,
        align: "center" as AlignType,
        render: (_, record) => (
          <Typography className={styles.productValue}>
            {formatMoney(record.value)}
          </Typography>
        ),
      },
      // {
      //   title: "Tùy chọn",
      //   key: "action",
      //   width: 100,
      //   fixed: "right" as FixedType,
      //   align: "center" as AlignType,
      //   render: (_, record) => (
      //     <Button className={styles.cartDeleteBtn} onClick={handleOnBookUpdate}>
      //       Cap nhat
      //     </Button>
      //   ),
      // },
    ];
    return columns;
  };

  return (
    <div className={styles.cartTable}>
      <Typography className={styles.cartTitle}>Giỏ hàng của bạn</Typography>
      <Button
        type='primary'
        disabled={selectedRowKeys.length ? false : true}
        className={styles.deleteBtn}>
        Xóa
      </Button>
      <FormWrapper>
        <Table
          rowKey={"id"}
          rowSelection={rowSelection}
          locale={{
            triggerDesc: "Nhấn để sắp xếp giảm dần",
            triggerAsc: "Nhấn để sắp xếp tăng dần",
            cancelSort: "Nhấn để hủy sắp xếp",
          }}
          pagination={false}
          scroll={{ x: 1500 }}
          bordered
          dataSource={defaultValues}
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
