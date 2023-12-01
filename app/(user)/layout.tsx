import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function layout({ children }: Props) {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-[80vh] bg-[#f5f5f5] dark:bg-[#0a0a0a]">
          <Header />
          {children}
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default layout;
