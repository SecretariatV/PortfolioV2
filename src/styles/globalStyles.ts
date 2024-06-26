import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    // Toggle Component
    /** Sunny side */
    --blue-background: #C2E9F6;
	--blue-border: #72cce3;
	--blue-color: #96dcee;
	--yellow-background: #fffaa8;
	--yellow-border: #f5eb71;

    /** Dark side */
    --indigo-background: #808fc7;
	--indigo-border: #5d6baa;
	--indigo-color: #6b7abb;
	--gray-border: #e8e8ea;
	--gray-dots: #e8e8ea;

    /** general **/
	--white: #fff;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: black;
}
`;

export default GlobalStyles;
