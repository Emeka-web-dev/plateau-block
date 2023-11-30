import {atom} from "recoil";
import {create} from 'zustand';

export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

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