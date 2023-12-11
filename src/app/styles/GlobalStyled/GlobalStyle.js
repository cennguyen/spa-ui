import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: ${({ theme }) =>
      theme?.font?.fontFamily || 'Roboto,sans-serif'};
    src: ${({ theme }) => theme?.font?.src};
  }

  body {
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: Roboto,sans-serif;
  }

  body[data-modal-open=true] {
    overflow: hidden;
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  figure,
  blockquote,
  dl,
  dd {
    padding: 0;
    margin: 0;
  }

  ul,ol {
    list-style: none;
  }

  i {
    font-size: 12px;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.main};
  }

  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid;
    color: inherit;
    cursor: pointer;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-weight: 700!important;
    font: inherit;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  w-100 {
    width: 100%;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
    border: 0;
    height: auto;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    outline: none;
    font: inherit;
  }

  .mx-20 {
    margin-inline: 20px;
  }

  .flex-between {
    justify-content: space-between;
    align-items: center;
  }

  .bg-light {
    background-color: ${({ theme }) => theme.colors.white}
  }

  .w-100 {
    width: 100%;
  }

  .ml-20 {
    margin-left: 20px;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .contentBlockHeading {
    background-color: 072443_1￼;
    border-radius: 3px 3px 0 0;
    color: #fff;
    display: block;
    font-size: 13px;
    font-weight: 700;
    line-height: 35px;
    position: relative;
    text-align: left;
    text-transform: uppercase;
    width: 100%;
  }
`

export default GlobalStyle