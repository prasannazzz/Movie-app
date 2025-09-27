import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #0b0f19;
    --card: #11182a;
    --text: #e6e8f0;
    --muted: #9aa4bf;
    --accent: #6aa3ff;
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Cantarell, "Helvetica Neue", Arial;
    background: radial-gradient(1200px 700px at 20% 0%, #10162a, #0b0f19 60%);
    color: var(--text);
  }
  a { color: inherit; text-decoration: none; }
`;

export default GlobalStyle;