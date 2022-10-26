import { Button, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import LayoutContainer from "../src/containers/Layout";
import CardWrapper from "../src/components/CardWrapper";
import CategoryContainer from "../src/containers/CategoryWrapper";
export default function Home() {
  return (
    <div>
      <LayoutContainer title='Homepage'>
        <CardWrapper>
          <CategoryContainer />
          <CategoryContainer />
          <CategoryContainer />
        </CardWrapper>
      </LayoutContainer>
    </div>
  );
}
