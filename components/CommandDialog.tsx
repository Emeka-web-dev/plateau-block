"use client";

import { Search } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

import {
  CommandDialog,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useSearch } from "@/hooks/useSearch";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import { Input } from "./ui/input";
const query = groq`
    *[_type == "post" && title match $value] | order(_createdAt desc){
  title,
    slug,
    _id,
}
`;
type ItemProp = {
  title: string;
  slug: {
    current: string;
  };
  _id: string;
};
const SearchCommand = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [items, setItems] = useState<ItemProp[]>([]);

  const { isOpen, onClose } = useSearch();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if(!isOpen) setItems([])
  }, [isOpen]) 

  if (!isMounted) {
    return null;
  }

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const value = event.target.value;
    if (value.length < 3) return;
    const posts: ItemProp[] = await client.fetch(query, { value });
    setItems(posts);
  };
  console.log(items);
  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <Input onChange={handleChange} className="flex h-11 w-full rounded-md bg-transparent py-3 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none ring-offset-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0" />
      </div>
      <CommandList>
        <CommandGroup>
          {items.length == 0 && (
            <CommandItem className="aria-selected:bg-background">
              No result found...
            </CommandItem>
          )}
          {items?.map((item) => (
            <Link href={`/post/${item.slug.current}`} key={item?._id} onClick={onClose}>
            <CommandItem className="cursor-pointer">{item?.title}</CommandItem>
            </Link>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default SearchCommand;
