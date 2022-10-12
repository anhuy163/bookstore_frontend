import { Drawer } from "antd";

export default function SideMenu(props) {
  return (
    <Drawer
      {...props}
      title='Yuu Book'
      placement='left'
      closable={false}
      getContainer={false}
      style={{ position: "absolute" }}>
      <p>12345</p>
    </Drawer>
  );
}
