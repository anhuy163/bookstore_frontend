import ListOrders from "../../components/ListOrders";
import useQueryGetPayedOrders from "../../app/hooks/useQueryGetPayedOrders";

export default function ListOrdersContainer() {
  const { data, loading, error } = useQueryGetPayedOrders();
  //   console.log(data);

  return <ListOrders data={data} loading={loading} />;
}
