import { Button, Dropdown, Menu, Typography } from "antd";
import { BOOK_PATH } from "../../constants";
import { CaretDownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import styles from "./styles.module.less";

export default function OrderDetailBooks({ data }) {
  const router = useRouter();

  const handleOnClick = (id) => {
    router.push(`${BOOK_PATH}/${id}`);
  };
  const menu = (
    <Menu>
      {data?.map((item) => (
        <Menu.Item onClick={() => handleOnClick(item.bookId)} key={item.id}>
          <Typography className={styles.menuItem}>
            {`${item?.bookName} (x${item?.quantity})`}
          </Typography>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div className={styles.dropdown}>
      <Dropdown overlay={menu} trigger={["click"]} placement='bottomRight'>
        <Typography className={styles.title}>
          Sản phẩm
          <CaretDownOutlined />
        </Typography>
      </Dropdown>
    </div>
  );
}
