// import Header from "@/components/Header";
import Header from "@/components/Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function layout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default layout;
