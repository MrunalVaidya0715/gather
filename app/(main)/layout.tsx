
import NavigationSidebar from "@/components/navigations/NavigationSidebar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      
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
