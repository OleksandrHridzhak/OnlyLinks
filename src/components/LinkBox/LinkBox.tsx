import { MoveUpRight } from "lucide-react";

type LinkBoxProps = {
    link:string,
    children:React.ReactNode
}

export function LinkBox({link, children}:LinkBoxProps) {
  return (
    <div className="h-[70px] items-center justify-between px-6 max-w-md flex bg-grey-300  rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100
    mx-2
    ">
      <a href={link} className="p-0 m-0 text-xl instrument-serif-regular-italic">
        {children}
      </a>
      <div>
        <MoveUpRight/>
      </div>
    </div>
  );
}
