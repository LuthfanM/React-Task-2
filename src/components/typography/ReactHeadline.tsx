import React from "react";
import HeadlineData from "@/bookshop/data/Headline.bookshop.json";

interface HeadlineProps {
  title: string;
  kicker?: string;
  subhead?: string;
  style?: string;
}

const ReactHeadline: React.FC<HeadlineProps> = ({
  title,
  kicker,
  subhead,
  style,
}) => {
  return (
    <div className={`headline ${style}`}>
      {kicker && (
        <p className="text-sm text-gray-500 uppercase tracking-widest">
          {kicker.toUpperCase()}
        </p>
      )}
      <h2 className="text-3xl font-bold text-black">{title.toUpperCase()}</h2>
      {subhead && <p className="text-lg text-gray-700">{subhead}</p>}
    </div>
  );
};

export default ReactHeadline;
