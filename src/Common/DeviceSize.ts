export {};

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  full: customMediaQuery(1440),
  desktop: customMediaQuery(1280),
  medium: customMediaQuery(1000),
  tablet: customMediaQuery(768),
  mobileL: customMediaQuery(425),
  mobile: customMediaQuery(320),
};
