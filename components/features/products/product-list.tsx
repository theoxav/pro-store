import { Product } from '@/types';
import ProductItem from './product-item';

const ProductsList = ({
  products,
  title,
  limit,
}: {
  products: Product[];
  title?: string;
  limit?: number;
}) => {
  const limitedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="my-4">
      <h2 className="font-bold mb-4">{title}</h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedProducts.map((product) => (
            <ProductItem key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default ProductsList;
