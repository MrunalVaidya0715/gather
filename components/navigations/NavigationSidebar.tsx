import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { NavigationAction } from "./NavigationAction";
import { ScrollArea } from "@/components/ui/scroll-area";

import ToolTip from "../Tooltip";
import NavigationItem from "./NavigationItem";
import { ModeToggle } from "../mode-toggle";
import { UserButton } from "@clerk/nextjs";

const NavigationSidebar = async () => {
  const profile = await CurrentProfile();
  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  return (
    <div className="bg-slate-300 dark:bg-[#131721] flex flex-col items-center gap-2 w-full h-full p-3">
      {/* logo */}
      <div className=" aspect-square rounded-full hover:rounded-xl overflow-hidden bg-white dark:bg-blue-950 transition-all ">
        <Image
          className=" aspect-square object-center object-cover scale-75"
          src="/assets/logo/logo1.png"
          alt="Gather"
          width={100}
          height={100}
        />
      </div>
      <Separator />
      <NavigationAction />
      <Separator />
      <ScrollArea className="h-full">
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className=" flex flex-col gap-y-2 items-center">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavigationSidebar;
