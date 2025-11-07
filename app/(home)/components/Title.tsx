"use client";

import React from "react";

interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <div className={className}>
      <div className="relative inline-block">
        {/* Top Accent Bar */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-green-500 to-green-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-green-500 via-emerald-400/50 to-transparent"></div>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          {text}
        </h2>

        {/* Bottom Accent */}
        <div className="mt-4 flex items-center gap-2">
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Title;
