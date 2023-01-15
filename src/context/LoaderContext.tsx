import { LoaderContextInterface } from "types/context";
import React, { createContext, PropsWithChildren, useState } from "react";

/**
 * LOADER CONTEXT
 */
export const LoaderContext = createContext<LoaderContextInterface>(
  {} as LoaderContextInterface
);

const LoaderContextWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  /**
   * LODER CONTEXT STATE
   */
  const [progress, setProgress] = useState<number>(0);
  const [showLoader, setShowLoader] = useState<boolean>(false);

  /**
   * TERMINATE THE TIMER
   * @param interval
   */
  const terminate = (interval: NodeJS.Timer) => {
    setTimeout(() => {
      setShowLoader(false);
      clearInterval(interval);
      setProgress(0);
    }, 1000);
  };

  /**
   * START THE LOADER
   */
  const startLoader = async () => {
    setShowLoader(true);
    const interval = setInterval(() => {
      setProgress((progress) => {
        if (progress == 100) {
          terminate(interval);
          return progress;
        } else {
          return progress + 1;
        }
      });
    }, 150);
  };

  return (
    <LoaderContext.Provider
      value={{
        showLoader,
        startLoader,
        progress,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderContextWrapper;
