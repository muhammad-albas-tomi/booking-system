import { create } from 'zustand';

interface Room {
  adults: number;
  children: number;
}

interface SearchData {
  accommodationType: string;
  checkIn: Date | null;
  checkOut: Date | null;
  rooms: Room[];
}

type SearchType = {
  query: string;
  searchData: SearchData;
  setQuery: (query: string) => void;
  setSearchData: (data: Partial<SearchData>) => void;
  clearSearch: () => void;
};

const initialSearchData: SearchData = {
  accommodationType: '',
  checkIn: null,
  checkOut: null,
  rooms: [{ adults: 2, children: 0 }],
};

export const useSearchQuery = create<SearchType>((set) => ({
  query: '',
  searchData: initialSearchData,
  setQuery: (query) => set({ query }),
  setSearchData: (data) => set((state) => ({
    searchData: { ...state.searchData, ...data }
  })),
  clearSearch: () => set({
    query: '',
    searchData: initialSearchData
  }),
}));
