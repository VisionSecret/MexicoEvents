import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <img 
        src="/images/loadingAnimation.gif" 
        alt="Loading..." 
        className="h-1/2 w-1/2 object-cover object-center"
      />
    </div>
  );
};

export default Loading;
