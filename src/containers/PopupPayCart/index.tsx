import PopupPayCart from "../../components/PopupPayCart";
import useQueryGetOrders from "../../app/hooks/useQueryGetOrders";
import { useEffect, useState } from "react";
import useMutationPayCart from "../../app/hooks/useMutationPayCart";
import { showErrorMessage } from "../../app/helpers/messageHelper";

export default function PopupPayCartContainer(props) {
  const { data, loading: gettingOrders, error } = useQueryGetOrders();
  const { doMutation: payCart, loading: payingOrder } = useMutationPayCart();
  const [bookIds, setBookIds] = useState([]);
  useEffect(() => {
    var arr = [];
    !!data &&
      data?.cartItemResponses.map((book) => {
        arr.push(book.bookId);
      });
    setBookIds(arr);
  }, [data]);
  //   console.log(bookIds);

  const handleOnSubmit = (value) => {
    payCart({ ...value, bookIds });
    setTimeout(() => {
      props.onCancel();
    }, 500);
  };
  return (
    <PopupPayCart
      data={data}
      {...props}
      onFinish={handleOnSubmit}
      loading={gettingOrders || payingOrder}
    />
  );
}
