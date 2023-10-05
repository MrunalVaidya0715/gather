import { ModeToggle } from "@/components/mode-toggle";
import NavigationSidebar from "@/components/navigations/NavigationSidebar";
import { UserButton } from "@clerk/nextjs";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className=" absolute z-[100] flex items-center gap-2 top-0 right-0 p-2">
        <UserButton afterSignOutUrl="/" />
        <ModeToggle />
      </div>
      <div className="fixed z-30 inset-y-0 hidden md:flex flex-col h-full w-[75px]">
        <NavigationSidebar />
      </div>
      <main className="md:pl-[75px] h-full bg-white dark:bg-[#1d2332]">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
