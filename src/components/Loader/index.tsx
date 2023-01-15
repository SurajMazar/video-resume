import { LoaderContext } from "@/context/LoaderContext";
import useComputed from "@/hooks/useComputed";
import React, { PropsWithChildren, useContext } from "react";
import { createPortal } from "react-dom";
import PigDream from "./Partial/PigDream";
import PigFlight from "./Partial/PigFlight";
import PigHouse from "./Partial/PigHouse";
import PigKing from "./Partial/PigKing";
import PigMoney from "./Partial/PigMoney";

const Loader: React.FC<
  PropsWithChildren<{
    show?: boolean;
    message?: string;
  }>
> = (props) => {
  /**
   * LOADER CONTEXT
   */
  const { progress, showLoader } = useContext(LoaderContext);

  /**
   * COMPONENT PROPS
   */
  const { show, message } = props;

  /**
   * LOADER IMAGE
   */
  const LoaderImage = useComputed(() => {
    if(!show){
      if (progress < 25) {
        return <PigFlight />;
      } else if (progress < 50) {
        return <PigMoney />;
      } else if (progress < 75) {
        return <PigHouse />;
      } else {
        return <PigKing />;
      }
    }else{
      const elements = [<PigFlight />,<PigMoney />,<PigHouse />,<PigKing />] //eslint-disable-line
      return elements[Math.floor(Math.random() * elements.length)]
    }
  }, [progress]);

  return createPortal(
    <>
      {showLoader || show ? (
        <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-[rgba(255,255,255,0.90)]">
          <div className="mb-10 transition duration-200">
            <svg
              width={173}
              height={177}
              viewBox="0 0 180 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="pig-dream">
                <path
                  id="dream-bubble-2"
                  d="M9.25 103.394C12.7018 103.394 15.5 100.735 15.5 97.456C15.5 94.1769 12.7018 91.5186 9.25 91.5186C5.79822 91.5186 3 94.1769 3 97.456C3 100.735 5.79822 103.394 9.25 103.394Z"
                  fill="#D3EDF9"
                  stroke="black"
                  strokeWidth="4.6875"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="dream-bubble-1"
                  d="M26.75 70.2686C29.7188 72.9248 29.875 77.6123 27.0625 80.4248C26.9063 80.5811 26.75 80.7373 26.75 80.7373C23.625 83.7061 18.625 83.7061 15.6563 80.7373C12.6875 78.0811 12.5313 73.3936 15.3438 70.5811C15.5 70.4248 15.6563 70.2686 15.6563 70.2686C18.625 67.2998 23.625 67.2998 26.75 70.2686Z"
                  fill="#D3EDF9"
                  stroke="black"
                  strokeWidth="4.6875"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="dream-bubble"
                  d="M170.5 59.956C170.5 52.9248 167.844 46.5185 163.625 41.5185C163.938 40.1123 164.25 38.706 164.25 37.1435C164.25 28.081 156.906 20.7373 147.844 20.7373C147.531 20.7373 147.375 20.7373 147.062 20.7373C143.156 14.6435 137.688 9.64354 131.125 6.67479C115.344 -0.825211 97.0625 3.54979 86.2813 16.206C84.0938 14.956 81.5938 14.4873 78.9375 14.4873C70.5 14.4873 63.625 21.0498 63.1563 29.331C50.8125 32.6123 41.5938 44.0185 41.5938 57.456C41.5938 71.3623 51.4375 83.081 64.5625 85.8935C66.4375 101.206 79.4063 113.081 95.3438 113.081C104.25 113.081 112.219 109.331 117.844 103.394C123 108.706 130.188 111.831 137.688 111.831C153 111.831 165.5 99.331 165.5 84.0185C165.5 81.6748 165.188 79.331 164.563 77.1435C168.469 72.2998 170.5 66.206 170.5 59.956Z"
                  fill="#D3EDF9"
                  stroke="black"
                  strokeWidth="4.6875"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {LoaderImage}
                <g id="pig-body">
                  <path
                    id="Vector"
                    d="M84.5625 138.706C84.5625 122.612 68.9375 109.487 49.5625 109.487C35.0313 109.487 22.375 116.987 17.2188 127.456H13.625C10.9688 127.456 8.9375 129.487 8.9375 132.144V143.862C8.9375 146.519 11.125 148.55 13.625 148.55H16.75C18.9375 153.55 22.6875 157.925 27.5313 161.206L25.1875 169.644L41.125 173.862L43.3125 165.894C44.875 166.675 47.0625 167.456 49.7188 167.769C54.875 168.394 58.9375 167.144 60.8125 166.206L62.8438 173.706L78.7813 169.487L75.6563 157.925C81.125 153.081 84.5625 146.206 84.5625 138.706Z"
                    fill="#FCE9F2"
                    stroke="black"
                    strokeWidth="4.6875"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="Vector_2">
                    <path
                      d="M59.4062 121.206C56.2812 119.487 53.1563 118.706 49.875 119.175C49.25 119.331 48.625 119.331 48 119.487"
                      fill="white"
                    />
                    <path
                      d="M59.4062 121.206C56.2812 119.487 53.1563 118.706 49.875 119.175C49.25 119.331 48.625 119.331 48 119.487"
                      stroke="black"
                      strokeWidth="4.6875"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <path
                    id="Vector_3"
                    d="M34.875 106.675C30.6562 103.237 24.5625 103.862 21.125 108.081L36.2813 120.425C39.7188 116.206 39.0937 110.112 34.875 106.675Z"
                    fill="#EF66B2"
                    stroke="black"
                    strokeWidth="4.6875"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_4"
                    d="M30.1875 133.237C32.086 133.237 33.625 131.698 33.625 129.8C33.625 127.901 32.086 126.362 30.1875 126.362C28.289 126.362 26.75 127.901 26.75 129.8C26.75 131.698 28.289 133.237 30.1875 133.237Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="0.390625"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_5"
                    d="M85.0312 137.925C86.9063 134.644 90.5 132.612 94.0937 131.519C95.9687 130.894 98.4688 130.581 99.875 131.987C101.125 133.081 101.281 135.112 100.656 136.675C100.031 138.237 98.7812 139.8 97.0625 139.956C95.5 140.112 93.9375 139.175 93.1562 137.769C92.375 136.519 92.2187 134.8 92.5312 133.237C93.1562 130.112 95.8125 127.3 98.9375 126.519C99.875 126.206 101.125 126.206 102.063 126.675"
                    stroke="black"
                    strokeWidth="4.6875"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </svg>
          </div>
          {showLoader || show ? (
            <div
              className={`${
                progress < 90 ? "text-blue-400" : "text-green-500"
              }  text-2xl font-medium`}
            >
              {!message ? (
                <>
                  {progress < 90 ? "Please wait" : "Almost there"} ...{" "}
                  <span className="font-extrabold">{progress}%</span>
                </>
              ) : (
                message
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>,
    document.body
  );
};

export default Loader;
