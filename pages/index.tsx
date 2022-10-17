import { Button, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
// import LayoutContainer from "../src/containers/Layout";
// import CardWrapper from "../src/components/CardWrapper";
import LayoutContainer from "../src/containers/Layout";
import CardWrapper from "../src/components/CardWrapper";
export default function Home() {
  return (
    <div>
      <LayoutContainer title='Homepage'>
        <Breadcrumb style={{ padding: "10px 0" }}>
          <Breadcrumb.Item href=''>
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item>1</Breadcrumb.Item>
        </Breadcrumb>
        <CardWrapper>123</CardWrapper>
      </LayoutContainer>
    </div>
  );
}
