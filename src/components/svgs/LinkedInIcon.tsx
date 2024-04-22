import * as React from "react";
import { SVGProps } from "react";
const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={33}
    height={33}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="url(#b)" d="M.5.5h32v32H.5z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5.5h32v32H.5z" />
      </clipPath>
      <pattern
        id="b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#c" transform="scale(.00195)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="c"
        width={512}
        height={512}
      />
    </defs>
  </svg>
);
export default LinkedInIcon;