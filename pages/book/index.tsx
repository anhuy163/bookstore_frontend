import LayoutContainer from "../../src/containers/Layout";
import MyBreadcrumb from "../../src/components/MyBreadcrumb";
import CardWrapper from "../../src/components/CardWrapper";
import ListBooksContainer from "../../src/containers/BooksByCategoryId";
import moment from "moment";
import { useState } from "react";
import { Button, DatePicker, Radio } from "antd";

export default function Book() {
  return (
    <LayoutContainer title='Sách'>
      {/* <MyBreadcrumb />*/}
      <CardWrapper>
        <ListBooksContainer />
      </CardWrapper>
    </LayoutContainer>
  );
}
