import React from "react";

interface SpacerProps {
  maxHeight?: string;
  maxWidth?: string;
}

const Spacer: React.FC<SpacerProps> = ({
  maxHeight = "auto",
  maxWidth = "auto",
}) => {
  return (
    <div
      className="spacer"
      style={{
        maxHeight,
        maxWidth,
      }}
    ></div>
  );
};

export default Spacer;
