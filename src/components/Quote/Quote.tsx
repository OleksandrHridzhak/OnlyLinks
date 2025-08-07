type QuoteProps = {
    children:React.ReactNode
}

export function Quote({children}:QuoteProps) {
  return (
    <div className="h-2xl">
    <h1 className=" instrument-serif-regular text-center py-15">
        {children}
    </h1>
    </div>
  );
}
