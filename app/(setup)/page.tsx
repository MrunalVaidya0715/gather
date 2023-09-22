import { ModeToggle } from "@/components/mode-toggle";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { UserButton, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
const SetupPage = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile?.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return (
    <div className=" absolute text-xl top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      Create a Server
      <div className="z-[100] fixed flex items-center gap-2 top-0 left-0 p-2">
        <UserButton afterSignOutUrl="/" />
        <ModeToggle />
      </div>
    </div>
  );
};

export default SetupPage;
