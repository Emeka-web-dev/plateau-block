import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function layout({ children }: Props) {
  return (
    <div>
      <div className="min-h-[80vh]">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default layout;
