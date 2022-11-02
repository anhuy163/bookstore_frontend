import BookDetail from "../../components/BookDetail";
import { useAppDispatch, useAppSelector } from "../../app/hooks/useRedux";
import { addToCart, cart } from "../../app/redux/slices/cartSlice";

export default function BookDetailContainer() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const onAddBookToCart = (item, number) => {
    dispatch(addToCart({ item, number }));
  };
  return <BookDetail onAdd={onAddBookToCart} />;
}
