import { createContext, ReactNode, useContext, useState } from "react";
import { SearchResult } from "../../interfaces/Movie";

export interface SearchContextProps {
  searchResults: SearchResult[];
  setSearchResults: (results: SearchResult[]) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({children}:{children: ReactNode}) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch debe ser usado dentro de un SearchProvider");
  }
  return context;
};