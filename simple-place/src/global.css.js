import { createGlobalStyle } from "styled-components";

import QuicksandWoff700 from "./assets/fonts/Quicksand/Quicksand-Bold.woff";
import QuicksandWoff600 from "./assets/fonts/Quicksand/Quicksand-SemiBold.woff";
import QuicksandWoff500 from "./assets/fonts/Quicksand/Quicksand-Medium.woff";
import QuicksandWoff400 from "./assets/fonts/Quicksand/Quicksand-Regular.woff";

import SegoeWoff700Italic from "./assets/fonts/SegoeUI/Segoe-UI-Bold-Italic.woff";
import SegoeWoff700 from "./assets/fonts/SegoeUI/Segoe-UI-Bold.woff";
import SegoeWoff400Italic from "./assets/fonts/SegoeUI/Segoe-UI-Italic.woff";
import SegoeWoff400 from "./assets/fonts/SegoeUI/Segoe-UI.woff";

const GlobalCSS = createGlobalStyle`
body {
  overflow-y: scroll;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  @font-face {
    font-family: "Quicksand";
    src: local("Quicksand"),
      url(${QuicksandWoff700}) format("woff");
    font-weight: 700;
  }
  @font-face {
    font-family: "Quicksand";
    src: local("Quicksand"),
      url(${QuicksandWoff600}) format("woff");
    font-weight: 600;
  }
  @font-face {
    font-family: "Quicksand";
    src: local("Quicksand"),
      url(${QuicksandWoff500}) format("woff");
    font-weight: 500;
  }
  @font-face {
    font-family: "Quicksand";
    src: local("Quicksand"),
      url(${QuicksandWoff400}) format("woff");
    font-weight: normal;
  }  

  @font-face {
    font-family: "SegoeUI";
    src: local("SegoeUI"),
      url(${SegoeWoff700Italic}) format("woff");
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: "SegoeUI";
    src: local("SegoeUI"),
      url(${SegoeWoff700}) format("woff");
    font-weight: 700;
  }
  @font-face {
    font-family: "SegoeUI";
    src: local("SegoeUI"),
      url(${SegoeWoff400Italic}) format("woff");
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: "SegoeUI";
    src: local("SegoeUI"),
      url(${SegoeWoff400}) format("woff");
    font-weight: normal;
  }  

  // @font-face{
  //   font-family: "San Francisco";
  //   src: local(")
  // }
`;

export default GlobalCSS;
