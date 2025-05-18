import { createContext, useContext, useState } from 'react'

type Post = any

interface SearchContextProps {
  query: string
  setQuery: (query: string) => void
  searchedPosts: Post[] | null
  setSearchedPosts: (posts: Post[] | null) => void
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('')
  const [searchedPosts, setSearchedPosts] = useState<Post[] | null>(null)

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        searchedPosts,
        setSearchedPosts,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearchContext() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider')
  }
  return context
}
