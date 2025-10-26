import ProductsList from '@/components/features/products/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductsList
        products={latestProducts}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default HomePage;