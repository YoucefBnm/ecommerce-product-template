import { useProductContext } from '@/context/product';
import { cn } from '@/lib/utils';
import React from 'react';

export function ProductColorsWrap({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('flex gap-2 flex-wrap', className)} {...props} />;
}
interface ProductColorTriggerProps extends React.ComponentProps<'button'> {
  index: number;
}
export function ProductColorTrigger({
  index,
  className,
  ...props
}: ProductColorTriggerProps) {
  const { activeColor, handleColorChange } = useProductContext();
  const onColorChange = () => handleColorChange(index);
  return (
    <button
      className={cn(
        'relative p-2 rounded text-sm font-medium transition-[border-color,opacity] duration-200',
        activeColor === index
          ? 'ring ring-foreground opacity-100'
          : 'opacity-70',
        'hover:ring hover:ring-foreground',
        'after:absolute after:inset-0 after:bg-primary/5 after:pointer-events-none',
        'border-muted-foreground  hover:border-foreground',

        className,
      )}
      aria-pressed={index === activeColor}
      onClick={onColorChange}
      {...props}
    />
  );
}
