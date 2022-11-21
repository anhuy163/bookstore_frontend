import BookDetail from "../../components/BookDetail";
import { useAppDispatch, useAppSelector } from "../../app/hooks/useRedux";
import { addToCart, cart } from "../../app/redux/slices/cartSlice";
import useQueryGetBookById from "../../app/hooks/useQueryGetBookById";
import { useRouter } from "next/router";
import useQueryGetCommentsByBookId from "../../app/hooks/useQueryGetCommentsByBookId";
import useMutationPostComment from "../../app/hooks/useMutationPostComment";
import useMutationAddBook from "../../app/hooks/useMutationAddBook";

export default function BookDetailContainer({ bookId = undefined }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useQueryGetBookById(id);
  const { doMutation: addBook, loading: addingBook } = useMutationAddBook();
  const { doMutation: postComment, loading: postingComment } =
    useMutationPostComment(id);
  const { data: comments, loading: gettingComments } =
    useQueryGetCommentsByBookId(id);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const onAddBookToCart = (id, number) => {
    // dispatch(addToCart({ item, number }));
    addBook({ bookId: id, quantity: number });
  };

  const handleOnPostComment = (value, callback: () => void) => {
    console.log(value);
    postComment(value).then(() => {
      () => callback;
    });
  };
  return (
    <BookDetail
      defaultValues={data}
      onAdd={onAddBookToCart}
      comments={comments}
      onPostComment={handleOnPostComment}
      loading={postingComment || gettingComments || addingBook}
    />
  );
}
