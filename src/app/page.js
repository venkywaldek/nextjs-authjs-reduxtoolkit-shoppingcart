import { fetchAllProducts } from '@/actions';
import Image from 'next/image';
import ProductCard from './components/product-card';

export default async function Home() {
  const getAllProducts = await fetchAllProducts();
  console.log(getAllProducts);
  return (
    <div>
      <h1> Shopping Cart</h1>
      <div>
        {getAllProducts && getAllProducts.data && getAllProducts.data.length > 0
          ? getAllProducts.data.map((productItem) => <ProductCard item={productItem} />)
          : null}
      </div>
    </div>
  );
}
