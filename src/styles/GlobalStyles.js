import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
${normalize}
html {
    box-sizing: border-box;
}
*,
*:before,
*:after {
    box-sizing: inherit;
    font-family:inherit;
}
img{
    max-width:100%;
    max-height:100%;
}
body{
    font-family: "Roboto", sans-serif;
    padding:0;
    margin:0;
    min-height: 100vh;
    position:relative;
}

button{
    cursor:pointer;
}
`;

export default GlobalStyles;
