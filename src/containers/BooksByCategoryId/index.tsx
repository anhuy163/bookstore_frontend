import ListBooks from "../../components/Books";
import useQueryGetBooksByCategoryId from "../../app/hooks/useQueryGetBooksByCategoryId";
import { useRouter } from "next/router";

export default function ListBooksContainer() {
  const router = useRouter();
  const { data, loading, error } = useQueryGetBooksByCategoryId(
    router.query.categoryId
  );

  return (
    <ListBooks
      loading={loading}
      defaultValues={data?.books}
      title={data?.categoryName}
    />
  );
}
