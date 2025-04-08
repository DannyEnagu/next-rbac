import Header from "@/component/dashboard/Header";
import SideMenu from "@/component/dashboard/SideMenu";

const DashboardLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
    <div className="grid grid-cols-[248px_minmax(900px,_1fr)] h-full">
          <SideMenu />
        <div className="flex flex-col">
          <Header />
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
    </div>);
}

export default DashboardLayout