import axios from "axios";
import { useQuery } from "umi";
import ProductList from "@/components/ProductList";

export default function Menu() {
  const productsQuery = useQuery(['products'], {
    queryFn() {
      return axios.get('/api/products').then((res) => res.data);
    },
  });
  if (productsQuery.isLoading) return null;
  return (
    <div>
      <h1>Thực Đơn Hôm Nay</h1>
      <ProductList
        products={productsQuery.data.data}
      />
    </div>
  );
}
