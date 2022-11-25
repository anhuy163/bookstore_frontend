import LayoutContainer from "../../src/containers/Layout";
import CardWrapper from "../../src/components/CardWrapper";
import Error from "next/error";
import ListOrdersContainer from "../../src/containers/ListOrders";

export default function OrderPage() {
  return !!(
    typeof window !== "undefined" && localStorage.getItem("currentUser")
  ) ? (
    <LayoutContainer title='Đơn hàng'>
      <CardWrapper>
        <ListOrdersContainer />
      </CardWrapper>
    </LayoutContainer>
  ) : (
    <Error statusCode={404} />
  );
}
