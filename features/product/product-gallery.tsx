'use client';
import React from 'react';
import {
  ProductCarousel,
  ProductCarouselSlide,
  ProductCarouselThumbnail,
  ProductCarouselWrapper,
} from '../../components/systaliko-ui/product-carousel';
import Image from 'next/image';

interface ProductGalleryProps extends React.ComponentProps<'div'> {
  productImages: string[];
  layoutId: string;
  productName?: string;
}

export function ProductGallery({
  productImages,
  layoutId,
  productName,
  ...props
}: ProductGalleryProps) {
  return (
    <div {...props}>
      <ProductCarousel
        id="product-carousel"
        className=" flex gap-4 items-start"
      >
        <div
          className="flex flex-col items-start justify-start gap-2"
          role="tablist"
          aria-label={
            productName
              ? `${productName} image thumbnails`
              : 'Product image thumbnails'
          }
        >
          {productImages.map((imageUrl, index) => (
            <ProductCarouselThumbnail
              key={imageUrl}
              layoutId={layoutId}
              index={index}
              className="relative size-14 inline-flex justify-center items-center rounded after:bg-primary/5 after:absolute after:inset-0"
              activeLayoutClassName="w-[calc(100%+6px)] h-[calc(100%+6px)]"
              id={`${layoutId}-thumb-${index}`}
              aria-label={
                productName
                  ? `${productName} image ${index + 1}`
                  : `Image ${index + 1}`
              }
              aria-controls={`${layoutId}-panel-${index}`}
            >
              <div className="relative size-10/12 mx-auto">
                <Image
                  src={imageUrl}
                  sizes="(max-width: 100px) 100px, 80px"
                  fill
                  className="relative inline-block align-middle mx-auto w-full h-auto max-h-full object-contain"
                  alt={
                    productName
                      ? `${productName} thumbnail ${index + 1}`
                      : `Product thumbnail ${index + 1}`
                  }
                />
              </div>
            </ProductCarouselThumbnail>
          ))}
        </div>
        <ProductCarouselWrapper className="rounded overflow-hidden">
          {productImages.map((imageUrl, index) => (
            <ProductCarouselSlide
              key={imageUrl}
              className="size-full relative after:bg-primary/5 after:absolute after:inset-0"
              index={index}
              id={`${layoutId}-panel-${index}`}
              role="tabpanel"
              aria-labelledby={`${layoutId}-thumb-${index}`}
            >
              <Image
                src={imageUrl}
                fill
                className="object-contain mx-auto max-w-11/12 max-h-full"
                alt={
                  productName
                    ? `${productName} image ${index + 1}`
                    : `Product image ${index + 1}`
                }
                sizes="(min-width: 280px) 700px, 100vw"
                priority={index === 0}
              />
            </ProductCarouselSlide>
          ))}
        </ProductCarouselWrapper>
      </ProductCarousel>
    </div>
  );
}
