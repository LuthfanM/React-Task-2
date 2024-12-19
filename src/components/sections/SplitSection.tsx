import React from "react";

type SplitSectionProps = {
  background?: string;
  auto_rotate?: number;
  column_1?: React.ReactNode;
  column_2?: React.ReactNode;
  column_2_width?: React.ReactNode;
  column_3?: React.ReactNode;
  column_3_width?: React.ReactNode;
  column_4?: React.ReactNode;
  column_4_width?: number;
};

const SplitSection: React.FC<SplitSectionProps> = ({
  background,
  auto_rotate,
  column_1,
  column_2,
  column_2_width,
  column_3,
  column_3_width,
  column_4,
  column_4_width,
}) => {
  return (
    <div className="relative bg-cover bg-center bg-red-600">
      <div className="grid grid-cols-12 gap-4 p-6">
        <div className="col-span-12">{column_1}</div>
      </div>
    </div>
  );
};

export default SplitSection;
