import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --primaryColor: #b70202;
    --secondaryColor: #017de6;
    --hoverTextColor: #015eea;
    --highlightColor: #ffea00;
    --focusColor: #6707ed;
    --successColor: #2ab81b;
    --successColorTransparent: rgb(42, 184, 27, 90%);
    --white: #fff;
    --gradient: linear-gradient(to top, #015eea, #00c0fa);
    --borderRadius: 20px;
    --displayFont: 'Londrina Solid', sans-serif;
    --shadowColor: rgb(9, 65, 226, 70%);
    --textShadow: 1px 1px 0px var(--white), 2px 2px 0px var(--white), 3px 3px 0px var(--white),
      4px 4px 0px var(--white), 5px 5px 0px var(--white);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    scroll-margin-top: 2rem;
  }

  body {
    font-family: 'Palanquin Dark', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--gradient);
    color: var(--white);
    overflow-x: hidden;
  }

  a,
  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
    font-size: inherit;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  button:focus-visible,
  a:focus-visible {
    outline: 5px solid var(--focusColor);
    outline-offset: 0.25rem;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    overflow-wrap: break-word;
  }

  h1,
  h2 {
    line-height: 1.3;
  }

  p {
    max-width: 60ch;
    font-size: 1.5rem;
  }

  img {
    object-fit: cover;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 0;
  }

.display-text {
  display: block;
  font-family: var(--displayFont);
  font-size: clamp(5rem, 10vw, 7rem);
  line-height: 0.85;
  color: var(--primaryColor);
  margin-top: 0.5rem;
  text-shadow: var(--textShadow);
}

.primary-button {
  font-family: var(--displayFont);
  font-size: 2.5rem;
  max-width: 250px;
  margin: 0 auto;
  background-color: var(--primaryColor);
  padding: 0.25rem 2rem 0.5rem 2rem;
  border-radius: var(--borderRadius);
  transform: skew(-10deg) rotate(-5deg);
  box-shadow: 5px 5px var(--white);
  transition: all 200ms linear;
}

.primary-button-sq {
  background-color: var(--primaryColor);
  width: 55px;
  height: 55px;
  padding-top: 6px;
  border-radius: var(--borderRadius);
  box-shadow: 3px 3px var(--white);
  transition: all 200ms linear;
}

.primary-button:hover,
.primary-button-sq:hover {
  box-shadow: 7px 7px var(--white);
  filter: brightness(1.1);
}
.primary-button:active,
.primary-sq-button:active {
  box-shadow: 3px 3px var(--white);
}

.primary-button-mt {
  margin-top: 2rem;
}

  .sr-only:not(:focus) {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
  
  @media screen and (max-width: 1000px) {
    .primary-button-sq {
      width: 65px;
      height: 65px;
      padding-top: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    .primary-button-sq {
      width: 65px;
      height: 65px;
    }

    .primary-button-sq img {
      object-fit: contain;
      height: 35px;
      width: 35px;
    }
  }

  @media screen and (max-width: 350px) {
    .display-text {
      font-size: 4.5rem;
    }
  }
`;

export default GlobalStyle;
