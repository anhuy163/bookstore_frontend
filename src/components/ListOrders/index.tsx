import { List, Empty } from "antd";
import {} from "@ant-design/icons";
import FormWrapper from "../FormWrapper";
import styles from "./styles.module.less";
import Typography from "antd/lib/typography/Typography";
import moment from "moment";
import OrderDetailBooks from "../OrderDetailBooks";
import { formatMoney } from "../../app/helpers/moneyhelper";

export default function ListOrders({ data, loading }) {
  //   console.log(data);

  return (
    <div className={styles.ordersContainer}>
      <Typography className={styles.title}>Danh sách đơn hàng</Typography>
      <FormWrapper loading={loading}>
        {!loading && (
          <List
            className={styles.ordersList}
            locale={{
              emptyText: (
                <Empty
                  description={
                    <span className={styles.noDataTitle}>
                      Chưa có đơn hàng nào
                    </span>
                  }
                />
              ),
            }}
            split={false}
            pagination={{
              pageSize: 10,
              responsive: true,
              position: "bottom",
            }}
            dataSource={data}
            renderItem={(order) => (
              <div className={styles.orderDetail}>
                <div className={styles.orderDetailPrice}>
                  <Typography className={styles.orderCode}>
                    Mã đơn hàng: {(order as any).id}
                  </Typography>
                  <Typography className={styles.orderTime}>
                    Thời gian đặt hàng:{" "}
                    <Typography style={{ marginLeft: "10px" }}>
                      {moment((order as any).buyDate).format("DD-MM-YYYY")}
                    </Typography>
                  </Typography>

                  <Typography className={styles.orderPrice}>
                    Giá đơn hàng:{" "}
                    <Typography style={{ marginLeft: "10px", color: "red" }}>
                      {formatMoney((order as any).totalPriceOrder)}
                    </Typography>
                  </Typography>
                  <Typography className={styles.orderPhone}>
                    SĐT nhận hàng:{" "}
                    <Typography style={{ marginLeft: "10px", color: "gray" }}>
                      {formatMoney((order as any).phone)}
                    </Typography>
                  </Typography>
                </div>

                <div className={styles.orderBooks}>
                  <OrderDetailBooks data={(order as any)?.orderDetailDTO} />
                </div>
              </div>
            )}
          />
        )}
      </FormWrapper>
    </div>
  );
}
