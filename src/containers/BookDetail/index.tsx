import BookDetail from "../../components/BookDetail";
import { useAppDispatch, useAppSelector } from "../../app/hooks/useRedux";
import { addToCart, cart } from "../../app/redux/slices/cartSlice";
import useQueryGetBookById from "../../app/hooks/useQueryGetBookById";
import { useRouter } from "next/router";
import useQueryGetCommentsByBookId from "../../app/hooks/useQueryGetCommentsByBookId";

export default function BookDetailContainer({ bookId = undefined }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useQueryGetBookById(id);
  const { data: comments, loading: gettingComments } =
    useQueryGetCommentsByBookId(id);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const onAddBookToCart = (item, number) => {
    dispatch(addToCart({ item, number }));
  };
  return (
    <BookDetail
      defaultValues={data}
      onAdd={onAddBookToCart}
      comments={comments}
    />
  );
}
