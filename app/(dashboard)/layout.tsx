import Sidebar from "@/app/(dashboard)/_components/sidebar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { OrgSidebar } from "@/app/(dashboard)/_components/org-sidebar";
import NavBar from "@/app/(dashboard)/_components/navbar";

interface DashboradLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboradLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <NavBar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
