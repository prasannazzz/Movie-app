import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { api, OMDB_KEY } from "../api/client.jsx";
import { Shell, Header, Brand, Button, DetailLayout, PosterBig, Facts, SmallGrid, FactRow } from "../styles/UI.jsx";

export default function Details() {
  // useParams + axios + useEffect
  const { id } = useParams();
  const nav = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      setError("");
      try {
        const res = await api.get("/", { params: { i: id, plot: "full", apikey: OMDB_KEY } });
        if (!mounted) return;
        if (res.data?.Response === "True") setMovie(res.data);
        else setError(res.data?.Error || "Not found");
      }
    //    catch (err) {
    //     setError("Network error. Please try again.");
    //   } 
      finally {
        setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [id]);

  if (loading) return <Shell><div role="status">Loading details…</div></Shell>;
  if (error) return (
    <Shell>
      <div role="alert">{error}
        <div style={{marginTop:12}}>
          <Button onClick={() => nav(-1)}>Go Back</Button>
          <Button as={Link} to="/" style={{ marginLeft: 8 }}>Home</Button>
        </div>
      </div>
    </Shell>
  );
  if (!movie) return null;

  return (
    <Shell>
      <Header>
        <Brand to="/">Information about Prasanna's Collection!</Brand>
        <nav>
          <Button onClick={() => nav(-1)}>← Back</Button>
        </nav>
      </Header>

      <DetailLayout>
        <PosterBig src={movie.Poster !== "N/A" ? movie.Poster : `https://via.placeholder.com/600x900?text=${encodeURIComponent(movie.Title)}`} alt={movie.Title} />
        <div>
          <h1 style={{ marginTop: 0 }}>{movie.Title}</h1>
          <Facts>
            <span>{movie.Year}</span>
            <span>{movie.Runtime}</span>
            <span>{movie.Rated}</span>
            <span>{movie.Genre}</span>
            <span>⭐ {movie.imdbRating}</span>
          </Facts>
          <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{movie.Plot}</p>
          <SmallGrid>
            <FactRow><small>Director</small><strong>{movie.Director}</strong></FactRow>
            <FactRow><small>Writers</small><strong>{movie.Writer}</strong></FactRow>
            <FactRow><small>Cast</small><strong>{movie.Actors}</strong></FactRow>
            <FactRow><small>Language</small><strong>{movie.Language}</strong></FactRow>
            <FactRow><small>Box Office</small><strong>{movie.BoxOffice || "—"}</strong></FactRow>
          </SmallGrid>
        </div>
      </DetailLayout>
    </Shell>
  );
}