"use client";

import React from "react";

interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <div className={className}>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        {text}
      </h2>
    </div>
  );
};

export default Title;
