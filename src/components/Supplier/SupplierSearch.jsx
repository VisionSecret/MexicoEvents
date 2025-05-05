import React from "react";

const SupplierSearch = ({ searchQuery ,setSearchQuery}) => {
  return (
    <header className="search-header mb-12 md:mb-16 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#4E2DB3] to-[#8267E2]">
        Automation Suppliers Hub
      </h1>
      <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
        Discover top automation solution providers worldwide
      </p>
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search suppliers, technologies, locations..."
          className="w-full px-6 py-4 md:px-8 md:py-5 rounded-2xl border-0 focus:ring-4 focus:ring-[#4E2DB370] transition-all outline-none shadow-xl backdrop-blur-sm bg-white/70"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <svg
          className="absolute right-3 top-4 md:right-8 md:top-5 h-7 w-7 md:h-6 md:w-6 text-zinc-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </header>
  );
};

export default SupplierSearch;
