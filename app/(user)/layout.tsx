import Layout from "@/components/Layout";
import { client } from "@/sanity/lib/client";
import { aboutStateQuery } from "@/sanity/lib/queries";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const revalidate = 30;
async function layout({ children }: Props) {
  const about = await client.fetch(aboutStateQuery);
  return (
    <>
      <Layout state={about}>
        {children}
      </Layout>
    </>
  );
}

export default layout;
