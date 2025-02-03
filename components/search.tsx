"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

export function Search() {
  const [query, setQuery] = useState("")

  return (
    <div className="relative max-w-2xl mx-auto">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input
        type="search"
        placeholder="Search events, artists, teams, and more"
        className="w-full pl-10 h-12 rounded-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

