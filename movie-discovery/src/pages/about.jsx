import React from "react";
import { Link } from "react-router-dom";
import { Shell, Header, Brand, Button } from "../styles/UI.jsx";

export default function About() {
  return (
    <Shell>
      <Header>
        <Brand to="/">🎬 Prasanna CineScope</Brand>
        <nav>
          <Button as={Link} to="/">Home</Button>
        </nav>
      </Header>
      <div style={{ maxWidth: 780 }}>
        <h2>About</h2>
        <p>
          CineScope is a compact, industry-relevant Movie Discovery app showing how to build a modern React feature: search,
          results grid with a reusable Card, detail route, API integration with axios, responsive design using styled-components
          with @media queries, and polished micro-interactions via keyframes.
        </p>
      </div>
    </Shell>
  );
}
