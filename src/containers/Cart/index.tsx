import Cart from "../../components/Cart";
import { useAppDispatch, useAppSelector } from "../../app/hooks/useRedux";
import { addToCart, updateItem } from "../../app/redux/slices/cartSlice";
import useMutationAddBook from "../../app/hooks/useMutationAddBook";
import useQueryGetCart from "../../app/hooks/useQueryGetCart";
import useMutationChangeBookStatus from "../../app/hooks/useMutationChangeBookStatus";
import useMutationDeleteCartBooks from "../../app/hooks/useMutationDeleteCartBooks";

export default function CartContainer() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const { doMutation: changeBookStatus, loading: changingBookStatus } =
    useMutationChangeBookStatus();
  const { doMutation: addBook, loading: addingBook } = useMutationAddBook();
  const { data: userCart, loading: gettingCart, error } = useQueryGetCart();
  const { doMutation: deleteBooks, loading: deletingBooks } =
    useMutationDeleteCartBooks();

  // console.log(userCart);

  const handleOnAddBook = (book) => {
    // dispatch(
    //   updateItem({ bookId: book.bookId, quantity: book.updatedQuantity })
    // );
    addBook({ bookId: book.bookId, quantity: book.addedQuantity });
  };
  const handleOnChangeBookStatus = (value) => {
    changeBookStatus(value);
  };

  return (
    <Cart
      defaultValues={userCart?.cartItemResponses}
      loading={addingBook || gettingCart || changingBookStatus || deletingBooks}
      onAddBook={handleOnAddBook}
      onChangeStatus={handleOnChangeBookStatus}
      totalPrice={userCart?.totalPrice}
      onDeleteBooks={deleteBooks}
    />
  );
}
