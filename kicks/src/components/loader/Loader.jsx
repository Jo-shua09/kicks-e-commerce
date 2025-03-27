import { useState, useEffect } from "react";

const Loader = ({ onComplete }) => {
  const [loaded, setLoaded] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);
  const word = "KICKS";

  useEffect(() => {
    // Function to check if page has finished loading
    const checkPageLoad = () => {
      if (document.readyState === "complete") {
        // Animate letters first
        const letterAnimation = setInterval(() => {
          setLetterIndex((prev) => {
            if (prev >= word.length - 1) {
              clearInterval(letterAnimation);
              // After letters are shown, trigger fade out
              setTimeout(() => {
                setLoaded(true);
                if (onComplete) onComplete();
              }, 300);
              return prev;
            }
            return prev + 1;
          });
        }, 150); // Increased interval time for slower letter animation

        return () => clearInterval(letterAnimation);
      }
    };

    // Add event listener for page load
    window.addEventListener("load", checkPageLoad);
    // Also check current state in case page is already loaded
    checkPageLoad();

    return () => {
      window.removeEventListener("load", checkPageLoad);
    };
  }, [onComplete]);

  return (
    !loaded && (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#e7e7e3] overflow-hidden z-[9999999999]">
        <div className="w-[70%] sm:w-[40%] lg:w-[25%] relative mb-8">
          <div className="text-gray-950 sm:text-6xl text-7xl font-Rubik font-bold mb-4 text-center">
            {word.split("").map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all font-Rubik font-bold duration-1000 ${
                  index <= letterIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="h-2 w-full bg-gray-950 rounded-full overflow-hidden shadow-xl">
            <div className="h-full bg-gradient-to-r from-gray-400 to-gray-700 animate-pulse transition-all duration-300 ease-out relative w-full">
              <div className="absolute top-0 right-0 h-full w-4 bg-white opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Loader;
