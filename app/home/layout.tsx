"use client";
import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";
import { ApplicationRepositoryContextProvider } from "@/repository/ApplicationRepositoyContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationRepositoryContextProvider>
        <div className="flex h-screen flex-col w-screen">
          <Navbar />
          <div className="flex flex-rowh-full dark:text-white">
            <Sidebar />
            <div className="flex-[2] w-full h-full p-2">{children}</div>
          </div>
        </div>
      </ApplicationRepositoryContextProvider>
    </QueryClientProvider>
  );
}
