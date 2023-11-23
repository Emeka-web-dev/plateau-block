import { LayoutProps } from "sanity";
import Link from "next/link";
import { Undo2 } from "lucide-react";

function StudioNavbar(props: LayoutProps) {
  return (
    <div>
      <div className="p-4 bg-[#101112]">
        <Link href="/" className="flex items-center text-white">
          <Undo2 className="w-6 h-6 mr-2" />
          Go to Website
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}

export default StudioNavbar;

