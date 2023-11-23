import { create } from "zustand";

type UseSearchProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
};

export const useSearch = create<UseSearchProps>((set, get) => ({
    isOpen: false,
    onClose: () => set({isOpen: false}),
    onOpen: () => set({isOpen: true}),
    toggle: () => set({isOpen: !get().isOpen})
}))
