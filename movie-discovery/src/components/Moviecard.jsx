import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Card = styled(Link)`
  display: grid;
  grid-template-rows: 220px auto;
  background: var(--card);
  border: 1px solid #1a2340;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  isolation: isolate;
  transition: transform .15s ease, box-shadow .15s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.35);
  }
`;

const PosterWrap = styled.div`
  background: linear-gradient(90deg, #141b31 25%, #19223c 37%, #141b31 63%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.6s linear infinite;
  display: grid; place-items: center;
`;

const Poster = styled.img`
  width: 100%; height: 100%; object-fit: cover; display: block;
`;

const Meta = styled.div`
  padding: 12px;
  display: grid; gap: 6px;
`;

const Title = styled.h3`
  font-size: 14px; line-height: 1.3; margin: 0; color: var(--text);
`;

const Kicker = styled.div`
  font-size: 12px; color: var(--muted);
`;

export default function MovieCard({ movie }) {
  const poster = movie.Poster && movie.Poster !== "N/A" ? movie.Poster : `https://via.placeholder.com/300x450?text=${encodeURIComponent(movie.Title)}`;
  return (
    <Card to={`/movie/${movie.imdbID}`} aria-label={`Open details for ${movie.Title}`}>
      <PosterWrap>{poster && <Poster alt={movie.Title} src={poster} loading="lazy" />}</PosterWrap>
      <Meta>
        <Title title={movie.Title}>{movie.Title}</Title>
        <Kicker>{movie.Year} • {movie.Type}</Kicker>
      </Meta>
    </Card>
  );
}
