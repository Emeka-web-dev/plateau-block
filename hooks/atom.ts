import {create} from 'zustand';


  type StoreProps = {
    name: {
        description: string;
        address: {};
        navLinks: any[];
    };
    setDescription?: (item: string) => void;
    setAddress?: (item: {}) => void;
    setNavLinks?: (item: []) => void;
  }
export const useStore = create<StoreProps>((set) => ({
   name: {
    description: "",
    address: {},
    navLinks: [],
   },
   setDescription: (item) => set((state) => ({
    name: {
        ...state.name,
        description: item,
    }
   })),
   setAddress: (item) => set((state) => ({
    name: {
        ...state.name,
        address: item,
    }
   })),
   setNavLinks: (item) => set((state) => ({
    name: {
        ...state.name,
        navLinks: item,
    }
   }))
}))