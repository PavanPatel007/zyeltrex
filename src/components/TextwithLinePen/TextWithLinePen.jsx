import React from "react";

const TextWithLinePen = ({ text = "", imgClass = "" }) => {
  return (
    <span className="relative inline-block">
      {text}
      {/* <svg
        className="lqd-highlight-brush-svg"
        width="233"
        height="13"
        viewBox="0 0 233 13"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path d="m.624 9.414-.312-2.48C0 4.454.001 4.454.002 4.454l.035-.005.102-.013.398-.047c.351-.042.872-.102 1.557-.179 1.37-.152 3.401-.368 6.05-.622C13.44 3.081 21.212 2.42 31.13 1.804 50.966.572 79.394-.48 113.797.24c34.387.717 63.927 2.663 84.874 4.429a1048.61 1048.61 0 0 1 24.513 2.34 641.605 641.605 0 0 1 8.243.944l.432.054.149.02-.318 2.479-.319 2.48-.137-.018c-.094-.012-.234-.03-.421-.052a634.593 634.593 0 0 0-8.167-.936 1043.26 1043.26 0 0 0-24.395-2.329c-20.864-1.76-50.296-3.697-84.558-4.413-34.246-.714-62.535.332-82.253 1.556-9.859.612-17.574 1.269-22.82 1.772-2.622.251-4.627.464-5.973.614a213.493 213.493 0 0 0-1.901.22l-.094.01-.028.004Z"></path>
      </svg> */}
      <img
        src="/assets/svg/pen.svg"
        alt="Pen Icon"
        className={`h-5 absolute top-0 -right-6 mt-0 ${imgClass}`}
      />
    </span>
  );
};

export default TextWithLinePen;
