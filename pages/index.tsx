import { Button, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import LayoutContainer from "../src/containers/Layout";
import CardWrapper from "../src/components/CardWrapper";
import CategoryContainer from "../src/containers/CategoryWrapper";
import { SKILL_BOOKS, DETECTIVE_BOOKS, SCIENCE_BOOKS } from "../src/constants";
export default function Home() {
  return (
    <div>
      <LayoutContainer title='Trang chủ'>
        <CardWrapper>
          <CategoryContainer
            categoryId={552}
            categoryName='PHÁT TRIỂN BẢN THÂN'
            data={SKILL_BOOKS}
          />
          <CategoryContainer
            categoryId={560}
            categoryName='TRINH THÁM'
            data={DETECTIVE_BOOKS}
          />
          <CategoryContainer
            categoryId={565}
            categoryName='KHOA HỌC - XÃ HỘI'
            data={SCIENCE_BOOKS}
          />
        </CardWrapper>
      </LayoutContainer>
    </div>
  );
}
