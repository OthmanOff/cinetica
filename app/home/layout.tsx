'use client'
import Navbar from "@/components/ui/navbar";
import Sidebar  from "@/components/ui/sidebar";
import { ApplicationRepositoryContextProvider } from "@/repository/ApplicationRepositoyContext";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  
    return (
      <ApplicationRepositoryContextProvider>
        <div className="flex h-full flex-col w-full">
        <Navbar/>
        <div className="flex h-full dark:text-white">
          <Sidebar/>
          <div className="flex-[2] w-full p-2">
            {children}
          </div>
        </div>
      </div>
      </ApplicationRepositoryContextProvider>
    );
  }
  