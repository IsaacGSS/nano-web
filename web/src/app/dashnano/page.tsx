import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation";

import { url_api } from "@/utils/env_validation";
import { SignOut, singoutFunction } from "@/components/ButtonAuth/SignOut";
import Image from 'next/image';

async function getData() {
  const res = await fetch(url_api.adm)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Dashnano() {
  const session = await getServerSession()

  if(!session){
    return redirect('dashnano/auth')
  }

  const adm = await getData() 
  
  if(session.user?.email != adm[0].email){ 

    () => singoutFunction
    
    return redirect('../')
  }

  return (
    <main className="flex flex-col gap-5 w-full bg-slate-200 h-screen justify-center items-center text-zinc-950"> 
      <Image alt="" src={session.user?.image ?? '/github-mark.svg'} width={60} height={60} className="rounded-full" />
      <p>ola {session.user?.name} </p>
      <p>{session.user?.email}</p>
      <SignOut
       />
    </main>
  )
}
