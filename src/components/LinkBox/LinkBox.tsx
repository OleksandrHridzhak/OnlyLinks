import { MoveUpRight } from "lucide-react";

type LinkBoxProps = {
    link:string,
    children:React.ReactNode
}

export function LinkBox({ link, children }: LinkBoxProps) {
  return (
    <a
      href={link}
      className="block w-full max-w-md h-[80px] flex items-center justify-between px-6 
        bg-grey-300 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm 
        bg-opacity-5 border border-gray-100 text-2xl instrument-serif-regular-italic no-underline"
    >
      <span>{children}</span>
      <MoveUpRight />
    </a>
  );
}


