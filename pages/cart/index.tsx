import LayoutContainer from "../../src/containers/Layout";
import MyBreadcrumb from "../../src/components/MyBreadcrumb";
import CardWrapper from "../../src/components/CardWrapper";
import CartContainer from "../../src/containers/Cart";

export default function CartPage() {
  return (
    <LayoutContainer title='Giỏ hàng'>
      <MyBreadcrumb />
      <CardWrapper>
        <CartContainer />
      </CardWrapper>
    </LayoutContainer>
  );
}
