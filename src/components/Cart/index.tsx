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
  Select,
} from "antd";
import { formatMoney } from "../../app/helpers/moneyhelper";
import FormWrapper from "../FormWrapper";
import PopupPayCartContainer from "../../containers/PopupPayCart";
import styles from "./styles.module.less";
import { AlignType, FixedType } from "rc-table/lib/interface";
import { useAppSelector } from "../../app/hooks/useRedux";
import { useState } from "react";
import { DeleteOutlined, PayCircleOutlined } from "@ant-design/icons";

export default function Cart({
  defaultValues,
  onAddBook,
  onChangeStatus,
  loading,
  totalPrice,
  onDeleteBooks,
}) {
  const cart = useAppSelector((state) => state.cart);
  // console.log(cart);
  // console.log(defaultValues);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // console.log(selectedRowKeys);

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys);
    },
  };

  const [togglePopupPayCart, setTogglePopupPayCart] = useState(false);

  const onOpenPopupPayCart = () => {
    setTogglePopupPayCart(true);
  };

  const cancelPopupPayCart = () => {
    setTogglePopupPayCart(false);
  };

  const handleOnBookUpdate = (value, bookId, oldQuantity) => {
    console.log(value, oldQuantity);

    onAddBook({
      bookId,
      addedQuantity: value - oldQuantity,
      updatedQuantity: value,
    });
  };

  const handleOnDeleteBooks = () => {
    onDeleteBooks(selectedRowKeys).then(() => setSelectedRowKeys([]));
  };

  const handleOnStatusChange = (status, id) => {
    // console.log(status);

    onChangeStatus({ bookId: id, status });
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
              <Select
                value={_}
                onChange={(value) =>
                  handleOnBookUpdate(value, record.bookId, record.quantity)
                }
                options={Array.from(Array(100).keys()).map((value) => {
                  return { value: value + 1, label: value + 1 };
                })}
              />
            </div>
          );
        },
        sorter: (a, b) => a.quantity - b.quantity,
      },
      {
        title: "Trạng thái",
        dataIndex: "status",
        align: "center" as AlignType,
        width: 80,
        render: (value, record) => {
          // console.log(value);
          return (
            <Checkbox
              onChange={() => handleOnStatusChange(!value, record.bookId)}
              checked={value}
            />
          );
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
            {formatMoney(record.quantity * record.priceNow)}
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
    <>
      <div className={styles.cartTable}>
        <Typography className={styles.cartTitle}>Giỏ hàng của bạn</Typography>
        <Button
          icon={<DeleteOutlined />}
          onClick={handleOnDeleteBooks}
          type='primary'
          disabled={selectedRowKeys.length ? false : true}
          className={styles.deleteBtn}>
          Xóa
        </Button>
        <Button
          icon={<PayCircleOutlined />}
          type='primary'
          className={styles.payBtn}
          disabled={!totalPrice}
          onClick={onOpenPopupPayCart}>
          Thanh Toán
        </Button>
        <FormWrapper loading={loading}>
          <Table
            rowKey={"bookId"}
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
            {totalPrice ? formatMoney(totalPrice) : ""}
          </Typography>
        </Typography>
      </div>
      <PopupPayCartContainer
        open={togglePopupPayCart}
        onCancel={cancelPopupPayCart}
      />
    </>
  );
}
