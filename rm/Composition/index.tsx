import React from "react";
import { Composition } from "remotion";
import Portfolio from "../../src/components/Video/Portfolio";

const CompositionComponent: React.FC = () => {
  return (
    <Composition
      id="Empty"
      component={Portfolio}
      durationInFrames={60}
      fps={60}
      width={1280}
      height={720}
    />
  );
};

export default CompositionComponent;
