import ProductsList from '@/components/features/products/product-list';
import sampleData from '@/db/sample-data';

export default async function HomePage() {
  return (
    <>
      <ProductsList
        products={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
}
