'use client'

import Image from "next/image"

export default function Profile ({ userName, avatarUrl } : {  userName: string, avatarUrl: string }) {
  return(
    <>
      <div className="flex flex-col gap-2 mt-[5rem] items-center decoration-0">
        <Image src={avatarUrl} width="112" height="112" alt="logo" className="rounded-full border-white border-[2.3px]" />
        <p className="text-white text-base font-normal  leading-normal mt-[0.5rem]">@{userName}</p>
      </div>
    </>
  )
} 