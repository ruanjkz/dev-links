import Link from "next/link";

export default function Links ({ url, name } : { url: string, name: string }) {
  return(
    <>
        <Link href={url}>
          <div className="flex items-center justify-center bg-white/10 hover:scale-95 hover:bg-white/20 transition-all ease-in-out  border-white/50 border-[1.5px] w-[33.75rem] h-[3.5rem] rounded-lg">
            <p className="text-center text-white text-base font-medium leading-normal">{name}</p>
          </div>
        </Link>
    </>
  )
} 