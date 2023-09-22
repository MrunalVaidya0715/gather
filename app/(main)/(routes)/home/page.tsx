import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="z-[100] fixed flex items-center gap-2 top-0 left-0 p-2">
        <UserButton afterSignOutUrl="/" />
        <ModeToggle />
      </div>
      <div className="flex flex-col items-center">
        <Image className=" aspect-square object-cover object-center " src='/assets/logo/logo1.png' width={100} height={100} alt="Gather"/>
        <h1 className=" tracking-wider uppercase text-3xl font-bold text-blue-600">
          Gather
        </h1>
        <p>The future of online socializing, made simple!</p>
      </div>
    </div>
  );
}
