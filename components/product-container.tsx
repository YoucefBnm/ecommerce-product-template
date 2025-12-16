'use client';
import { useProductContext } from '@/context/product';
import { PRODUCT } from '@/data/product';
import {
  Price,
  PriceCompareAt,
  PriceCurrent,
  PriceSavings,
} from '@/features/product/price';
import { ProductGallery } from '@/features/product/product-gallery';
import { badgeVariants } from './ui/badge';
import { Activity } from 'react';
import { RatingStars } from './systaliko-ui/rating-stars';
import { ProductSizes } from '@/features/product/product-sizes';
import {
  ProductColorsWrap,
  ProductColorTrigger,
} from '@/features/product/product-colors';
import Image from 'next/image';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { HeartIcon, ShoppingBagIcon } from 'lucide-react';

export function ProductContainer() {
  const { activeColor } = useProductContext();

  return (
    <main className="container max-w-5xl mx-auto py-16 px-8">
      <div className="md:w-4/5 mx-auto flex flex-wrap md:flex-nowrap gap-8 justify-center items-start">
        <ProductGallery
          productImages={PRODUCT.colors[activeColor].imagesUrl}
          className="min-w-2xs basis-full md:basis-2/3"
          layoutId={PRODUCT.id}
        />

        <div className="md:basis-1/3 space-y-12">
          <div className="space-y-4">
            <div>
              <span className="text-muted-foreground text-sm">
                Men Basketball shoes
              </span>
              <h1 className="text-3xl font-semibold">Air Jordan 1</h1>
            </div>
            <Price
              className="tabular-nums tracking-tighter space-x-2"
              amount={1999}
              compareAt={2499}
              currency="USD"
            >
              <PriceCurrent className="font-semibold" />
              <PriceCompareAt className="text-sm line-through text-muted-foreground" />
              <PriceSavings
                className={`${badgeVariants({ variant: 'outline' })} text-emerald-500 bg-emerald-100 border-none`}
              >
                Save
              </PriceSavings>
            </Price>
            <Activity mode={PRODUCT.rating ? 'visible' : 'hidden'}>
              <RatingStars rating={PRODUCT.rating!} />
            </Activity>
          </div>
          <Separator className="my-4" />
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Select Size</h2>
            <ProductSizes
              allSizes={PRODUCT.sizes}
              activeItemSizes={PRODUCT.colors[activeColor].sizes}
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Select Color</h2>

            <ProductColorsWrap id={PRODUCT.id}>
              {PRODUCT.colors.map((color, index) => (
                <ProductColorTrigger
                  className="size-16"
                  index={index}
                  key={color.id}
                >
                  <div className="relative size-full">
                    <Image
                      src={color.imagesUrl[0]}
                      sizes="(max-width: 100px) 100px, 80px"
                      fill
                      className="relative inline-block align-middle mx-auto w-full h-auto max-h-full object-contain"
                      alt={`product color "${color.color}"`}
                    />
                  </div>
                </ProductColorTrigger>
              ))}
            </ProductColorsWrap>
          </div>

          <div className="space-y-4">
            <Button size="lg" className="w-full py-6 rounded-full">
              Add to cart <ShoppingBagIcon />
            </Button>
            <Button
              variant={'outline'}
              size="lg"
              className="w-full py-6 rounded-full"
            >
              Favorites <HeartIcon />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
