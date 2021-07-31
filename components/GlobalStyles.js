import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  ::selection {
    background: ${theme`colors.yellow.400`};
  }
  ::-moz-selection {
    background: ${theme`colors.yellow.400`};
  }

  body {
    -webkit-tap-highlight-color: ${theme`colors.yellow.400`};
    ${tw`antialiased`}
		${tw`font-sans`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
