import React from "react";

interface EmbedProps {
  embed?: string;
  width?: string;
  height?: string;
}

const Embed: React.FC<EmbedProps> = ({
  embed,
  width = "100%",
  height = "100%",
}) => {
  return (
    <div
      className="embed"
      style={{
        width,
        height,
      }}
    ></div>
  );
};

export default Embed;
