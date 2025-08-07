import { MoveUpRight} from "lucide-react";

type LinkBoxProps = {
    link:string,
    children:React.ReactNode
}

export function LinkBox({ link, children }: LinkBoxProps) {
  return (
    <a
    href={link}
    className=" group block w-full max-w-md h-[80px] flex items-center justify-between px-6 
    bg-grey-300 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm 
    bg-opacity-5 border border-gray-100 text-2xl instrument-serif-regular-italic no-underline
    transition-all duration-300 ease-in-out transform hover:scale-[1.015] active:scale-[0.97] hover:bg-opacity-10"
    >
    <span>{children}</span>
    <MoveUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>

  );
}


