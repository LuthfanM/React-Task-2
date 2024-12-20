import React from "react";
interface SpacerProps {
  maxHeight?: string;
  maxWidth?: string;
}

const ReactSpacer: React.FC<SpacerProps> = ({
  maxHeight, maxWidth
}) => {

  const _styles = {
    ...(maxHeight && {maxHeight}),
    ...(maxWidth && {maxWidth})
  };

  return (
    <div className="flex-grow bg-red-500" style={_styles}></div>
  );
};

export default ReactSpacer;
