import { useState } from "react";
import {FunnelIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline/index.js";
import FilterBar from "./Filter.jsx";

export default function SearchBar({filter, setFilter, search, setSearch}) {
  const [showFilter, setShowFilter] = useState(false)
return (
  <>
    <div className="flex items-center justify-center px-6 py-4 w-full md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
      <div className="md:w-1/3 w-full">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative mr-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full rounded-md border-0 bg-dark py-1.5 pl-10 pr-3 text-gray-100 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-primary sm:text-sm sm:leading-6"
            placeholder="Search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <button>
        <FunnelIcon className="h-5 w-5 text-gray-400" aria-hidden="true" onClick={() => setShowFilter(!showFilter)}/>
      </button>
      {filter.length > 0 &&
        <button
          type="button"
          className="py-1 px-2 text-sm text-gray-100/50"
          onClick={() => {
            setFilter([]);
            setSearch("");
          }}
        >
          Supprimer les filtres
        </button>
      }
    </div>
    {showFilter &&
    <FilterBar filter={filter} setFilter={setFilter} showFilter={showFilter} setShowFilter={setShowFilter}/>}
  </>
  )
}