const SupplierCard = ({ supplier }) => {
  return (
    <div className="supplier-card h-[400px] flex flex-col group bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all border border-transparent hover:border-[#4E2DB310] hover:scale-105 overflow-hidden">
      {/* Image (takes up ~40% height) */}
      <div className="h-[40%] w-full flex items-center justify-center overflow-hidden">
        <img
          className="max-h-full max-w-full object-contain"
          src={supplier.imageUrl}
          alt={supplier.name}
        />
      </div>

      {/* Content (remaining ~60%) */}
      <div className="h-[60%] flex flex-col justify-between p-4 md:p-5">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
            {supplier.name}
          </h3>
          <p className="text-gray-600 text-xs md:text-sm mb-5 line-clamp-3">
            {supplier.details}
          </p>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {supplier.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 md:px-3 md:py-1 bg-[#4E2DB310] text-[#4E2DB3] rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-2">
          <span
            className={`status-dot ${
              supplier.status === "Active" ? "bg-green-500" : "bg-red-500"
            } w-2 h-2 rounded-full`}
          />
          <a
            href={`https://${supplier.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#4E2DB3] hover:text-[#3b1f8a] font-medium text-xs md:text-sm"
          >
            Explore Services
            <svg
              className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupplierCard;
