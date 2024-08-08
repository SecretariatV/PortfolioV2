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

    --text-light-primary: #103055;
    --text-light-secondary: #1b98d0;

    --text-dark-primary: #e3ebf6;
    --text-dark-secondary: #cd6118;

    /** button */
    --button-bg-primary: #040834;
    --button-bg-secondary: #ff014f;

    --color-heading: #202942;

    /** footer */
    --footer-light-bg: #040836;
    --footer-dark-bg: #003d63;


    --border: #dcdfe654;
    --light-grey: #c6c6c6;
    --black: #0f0f0f;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transform-style: preserve-3d;
}

*::-webkit-scrollbar {
    width: 5px;
}

*::-webkit-scrollbar-track {
    border: 1px solid var(--border);
    background-color: var(--light-grey);
}


*::-webkit-scrollbar-thumb {
    background-clip: content-box;
    background-color: var(--button-bg-secondary);
}

body {
    background: url('./white.webp');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;

    color: var(--text-light-primary);

    #title::before {
        background-color: #0693e3;
    }

    #forms {
        background-color: #ffffff80;
    }

    .form-title {
        color: black;
    }

    footer {
        background-color: var(--footer-light-bg);
    }
}

body:has(#toggle:checked) {
    background: url('./dark.webp');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;

    color: var(--text-dark-primary);

    #title::before {
        background-color: #ff014f;
    }

    #back_title{
        opacity: 0;
    }

    #forms {
        background-color: #00000030;
    }

    .form-title {
        color: white;
    }

    footer {
        background-color: var(--footer-dark-bg);
    }
}

p#logo {
    font-family: "Dancing Script";
    font-size: 32px;
    font-weight: 600;
}

#back_title {
    text-transform: uppercase;
    font-weight: 900;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 101px;
    background-size: cover;
    background-position: center;
    -webkit-text-stroke: 1px var(--color-heading);
    position: absolute;
    text-wrap: nowrap;
    left: 50%;
    transform: translateX(-50%);
    top: -60px;
    opacity: 0.2;
    font-family: 'Manrope', sans-serif;
    user-select: none;
}

h2 {
    font-family: "Bowlby One SC";
    font-size: 60px;
    font-weight: 400;
}

h3 {
    font-family: "Rubik", sans-serif;
    font-size: 30px;
    font-weight: 700;
}

.flex {
    display: flex;
    align-items: center;
}

.hidden {
    opacity: 0;
}
`;

export default GlobalStyles;
