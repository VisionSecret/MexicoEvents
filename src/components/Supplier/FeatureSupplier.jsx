import React from "react";

const FeatureSupplier = ({supplier}) => {
  return (
    <div className="featured-card h-full py-4 md:py-6">
      <div className="featured-content bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all h-full flex flex-col justify-between border border-gray-100">
        <div>
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              {supplier.name}
            </h3>
            <span
              className={`status-pill ${
                supplier.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              } px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-medium`}
            >
              {supplier.status}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
            {supplier.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 md:px-4 md:py-1.5 bg-[#4E2DB320] text-[#4E2DB3] rounded-full text-xs md:text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
          <p className="text-gray-600 mb-4 md:mb-6 flex items-center text-sm md:text-base">
            <svg
              className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {supplier.address}
          </p>
        </div>
        <a
          href={`https://${supplier.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between px-4 py-2 md:px-6 md:py-3 bg-[#4E2DB3] text-white rounded-lg md:rounded-xl hover:bg-[#3b1f8a] transition-colors text-sm md:text-base"
        >
          <span>Visit Platform</span>
          <svg
            className="w-4 h-4 md:w-5 md:h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FeatureSupplier;
