import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
