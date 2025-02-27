import Image from "next/image";

export default function Home() {

  return (
    <div className="h-[100vh] flex flex-col items-center">
        <div>
            <Image src="/images/logo-sistema-web-pro-max.png" 
              width={300}
              height={300}
              className="bg-zinc-900 block mx-auto p-2 rounded-md"
            />
        </div>
        <p className="mt-8">Olá Ernesto Ndula sejá bem vindo(a) de volta!</p>
    </div>
  )
  
}
