

type LinkBoxProps = {
    href:string,
    children:React.ReactNode
}

export function LinkBox({href, children}:LinkBoxProps) {
  return (
    <div>
      <a href={href} className="text-blue-500 hover:underline">
        {children}
      </a>
    </div>
  );
}
