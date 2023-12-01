import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function layout({ children }: Props) {
  return (
    <div>
      <div className="min-h-[80vh] bg-[#f5f5f5] dark:bg-[#0a0a0a]">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default layout;
