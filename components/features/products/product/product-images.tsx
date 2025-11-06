'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt={`Product image ${current + 1}`}
        width={500}
        height={500}
        priority
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} onClick={() => setCurrent(index)} className={cn('border mr-2 cursor-pointer hover:border-orange-600', current === index && 'border-orange-500')}>
            <Image
              src={image}
              alt={`Product image ${index + 1}`}
              width={100}
              height={100}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
