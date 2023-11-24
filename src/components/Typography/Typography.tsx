interface iTypography {
  children: React.ReactNode;
  className?: string;
  tag: 'h1' | 'h2' | 'h3' | 'p';
  size: 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
  color: 'dark' | 'black' | 'light' | 'gray' | 'grayLight' | 'red';
}

export function Typography({ children, className, tag }: iTypography) {
  return (
    <>
      {tag === 'h1' && <h1 className={className}>{children}</h1>}
      {tag === 'h2' && <h2 className={className}>{children}</h2>}
      {tag === 'h3' && <h3 className={className}>{children}</h3>}
      {tag === 'p' && <p className={className}>{children}</p>}
    </>
  );
}
