import LayoutContainer from "../../src/containers/Layout";
import CardWrapper from "../../src/components/CardWrapper";
import ListBooksContainer from "../../src/containers/BooksBySearchKey";

export default function SearchPage() {
  return (
    <LayoutContainer title='Tìm kiếm'>
      <CardWrapper>
        <ListBooksContainer />
      </CardWrapper>
    </LayoutContainer>
  );
}
