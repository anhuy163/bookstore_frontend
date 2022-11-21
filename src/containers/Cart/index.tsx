import Cart from "../../components/Cart";
import { useAppDispatch, useAppSelector } from "../../app/hooks/useRedux";
import { addToCart, updateItem } from "../../app/redux/slices/cartSlice";
import useMutationAddBook from "../../app/hooks/useMutationAddBook";

export default function CartContainer() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  console.log(cart);

  const handleOnAddBook = (book) => {
    console.log(book);

    dispatch(
      updateItem({ bookId: book.bookId, quantity: book.updatedQuantity })
    );
    addBook({ bookId: book.bookId, quantity: book.addedQuantity });
  };

  const { doMutation: addBook, loading: addingBook } = useMutationAddBook();
  return (
    <Cart
      defaultValues={cart?.items}
      loading={addingBook}
      onAddBook={handleOnAddBook}
    />
  );
}
