import { Outlet } from "react-router";
import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#05082D] text-white">
      <Header />
      <main className="flex-1 pt-[88px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
