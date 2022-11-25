import LayoutContainer from "../../src/containers/Layout";
import BookDetailContainer from "../../src/containers/BookDetail";
import MyBreadcrumb from "../../src/components/MyBreadcrumb";
import CardWrapper from "../../src/components/CardWrapper";

export default function BookDetailPage() {
  const paths = ["1"];

  return (
    <LayoutContainer title={"Chi tiet"}>
      {/* <MyBreadcrumb paths={paths} /> */}
      <CardWrapper>
        <BookDetailContainer />
      </CardWrapper>
    </LayoutContainer>
  );
}
