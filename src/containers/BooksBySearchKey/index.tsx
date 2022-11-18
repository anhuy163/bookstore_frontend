import ListBooks from "../../components/Books";
import { useRouter } from "next/router";
import useQueryGetBookBySearchKey from "../../app/hooks/useQueryGetBookBySearchKey";

export default function ListBooksContainer() {
  const router = useRouter();
  const { data, loading, error } = useQueryGetBookBySearchKey(
    router.query.searchKey
  );

  return (
    <ListBooks
      loading={loading}
      defaultValues={data}
      title={`Kết quả tìm kiếm cho "${router.query.searchKey}"`}
    />
  );
}
