import LayoutContainer from "../../src/containers/Layout";
import MyBreadcrumb from "../../src/components/MyBreadcrumb";
import CardWrapper from "../../src/components/CardWrapper";
import CartContainer from "../../src/containers/Cart";
import Error from "next/error";

export default function CartPage() {
  return !!(
    typeof window !== "undefined" && localStorage.getItem("currentUser")
  ) ? (
    <LayoutContainer title='Giỏ hàng'>
      {/* <MyBreadcrumb /> */}
      <CardWrapper>
        <CartContainer />
      </CardWrapper>
    </LayoutContainer>
  ) : (
    <Error statusCode={404} />
  );
}
