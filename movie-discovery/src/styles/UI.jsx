import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// Keyframes used in the grid entrance
export const popIn = keyframes`
  from { transform: scale(0.98); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

export const Shell = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

export const Header = styled.header`
  display: flex; gap: 16px; align-items: center; justify-content: space-between;
  margin-bottom: 24px;
  nav { display: flex; gap: 12px; }
`;

export const Brand = styled(Link)`
  font-weight: 800;
  letter-spacing: 0.6px;
  font-size: 20px;
  padding: 10px 12px;
  border-radius: 12px;
  background: linear-gradient(180deg, #18213a, #0f1629);
  border: 1px solid #1e2948;
  box-shadow: 0 10px 24px rgba(0,0,0,0.25);
`;

export const SearchBar = styled.form`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 10px;
  width: 100%;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  background: #0e1426;
  border: 1px solid #263258;
  color: var(--text);
  outline: none;
  &:focus { border-color: var(--accent); box-shadow: 0 0 0 4px rgba(106,163,255,0.15); }
`;

export const Button = styled.button`
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #2a3967;
  background: linear-gradient(180deg, #1b2a4a, #142038);
  color: var(--text);
  cursor: pointer;
  transition: transform .08s ease;
  &:active { transform: translateY(1px); }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  animation: ${popIn} 260ms ease both;
  /* Responsive @media queries */
  @media (max-width: 1200px) { grid-template-columns: repeat(5, 1fr); }
  @media (max-width: 992px) { grid-template-columns: repeat(4, 1fr); }
  @media (max-width: 768px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 560px) { grid-template-columns: repeat(2, 1fr); }
`;

export const DetailLayout = styled.section`
  display: grid; grid-template-columns: 320px 1fr; gap: 24px; align-items: start;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

export const PosterBig = styled.img`
  width: 100%; border-radius: 16px; border: 1px solid #1e2948; display: block;
`;

export const Facts = styled.div`
  display: flex; flex-wrap: wrap; gap: 8px; margin: 8px 0 16px 0;
  span { background: #121a31; border: 1px solid #243158; padding: 6px 10px; border-radius: 999px; font-size: 12px; color: var(--muted); }
`;

export const SmallGrid = styled.div`
  display: grid; grid-template-columns: 120px 1fr; gap: 10px 16px;
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

export const FactRow = styled.div`
  display: contents;
  small { color: var(--muted); }
`;
