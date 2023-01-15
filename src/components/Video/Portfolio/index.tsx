import React, { PropsWithChildren } from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

const Portfolio: React.FC = (props) => {
  const frame = useCurrentFrame();

  const opacity = Math.min(1, frame / 60);  

  return (
    <>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          fontSize: 80,
        }}
      >
        <div style={{ opacity: opacity }}>Portfolio</div>
      </AbsoluteFill>
    </>
  );
};

export default Portfolio;
