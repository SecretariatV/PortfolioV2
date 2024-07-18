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

    // Leading Component
    --loading-bg: #0f0f0f;
    --loading-color: #0077c0;

    --text-light-primary: #124d85;
    --text-light-secondary: #1b98d0;

    --text-dark-primary: #e3ebf6;
    --text-dark-secondary: #cd6118;

    /** button */
    --button-bg-primary: #040834;
    --button-bg-secondary: #ff014f;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: url('/white.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}

body:has(#toggle:checked) {
    background: url('/dark.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}

p#logo {
    font-family: "Dancing Script";
    font-size: 32px;
    font-weight: 600;
}

body {
    color: var(--text-light-primary);
}

body:has(#toggle:checked) {
    color: var(--text-dark-primary);
}

h2 {
    font-family: "Bowlby One SC";
    font-size: 60px;
    font-weight: 400;
}

h3 {
 font-family: "Rubik";
 font-size: 30px;
 font-weight: 500;
}
`;

export default GlobalStyles;
