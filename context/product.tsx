import React from 'react';

interface ProductContextValue {
  activeColor: number;
  handleColorChange: (index: number) => void;
  selectedSize: string | undefined;
  setSelectedSize: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ProductContext = React.createContext<ProductContextValue | undefined>(
  undefined,
);

export function useProductContext() {
  const context = React.useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
}

export function useActiveProductColor() {
  const [activeColor, setActiveColor] = React.useState<number>(0);
  const [activeImage, setActiveImage] = React.useState<number>(0);

  const handleColorChange = (index: number) => setActiveColor(index);

  const handleMouse = (event: 'enter' | 'leave') => {
    if (event === 'enter') setActiveImage(1);
    if (event === 'leave') setActiveImage(0);
  };

  return {
    activeColor,
    activeImage,
    handleColorChange,
    handleMouse,
  };
}

export function ProductProvider({ children }: React.ComponentProps<'div'>) {
  const { activeColor, handleColorChange } = useActiveProductColor();
  const [selectedSize, setSelectedSize] = React.useState<string | undefined>();

  return (
    <ProductContext.Provider
      value={{ activeColor, handleColorChange, selectedSize, setSelectedSize }}
    >
      {children}
    </ProductContext.Provider>
  );
}
