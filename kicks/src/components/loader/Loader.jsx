import { useState, useEffect } from "react";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);
  const word = "KICKS";

  useEffect(() => {
    const duration = 2000; // 2 seconds total
    const interval = 20; // Update every 20ms
    const step = (interval / duration) * 100;
    const letterInterval = duration / word.length;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoaded(true);
            if (onComplete) onComplete();
          }, 500);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    const letterTimer = setInterval(() => {
      setLetterIndex((prev) => {
        if (prev >= word.length - 1) {
          clearInterval(letterTimer);
          return prev;
        }
        return prev + 1;
      });
    }, letterInterval);

    return () => {
      clearInterval(timer);
      clearInterval(letterTimer);
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
                className={`inline-block transition-all font-Rubik font-bold duration-300 ${
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
            <div
              className="h-full bg-gradient-to-r from-gray-200 to-gray-700 transition-all duration-300 ease-out relative"
              style={{
                width: `${progress}%`,
                boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
              }}
            >
              <div className="absolute top-0 right-0 h-full w-4 bg-white opacity-30 animate-pulse"></div>
            </div>
          </div>
          <div className="text-gray-950 text-2xl font-Rubik font-bold mt-4 text-center">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    )
  );
};

export default Loader;
