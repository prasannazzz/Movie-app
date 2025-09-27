import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { api, OMDB_KEY } from "../api/client.jsx";
import MovieCard from "../components/Moviecard.jsx";
import { Shell, Header, Brand, SearchBar, Input, Button, Grid } from "../styles/UI.jsx";

export default function Home() {
  // useState + useRef + axios + JSX
  const [query, setQuery] = useState("avengers");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  // useEffect to fetch initial results
  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      setError("");
      try {
        const res = await api.get("/", { params: { s: query, apikey: OMDB_KEY, type: "movie" } });
        if (!mounted) return;
        if (res.data?.Search) setResults(res.data.Search);
        else {
          setResults([]);
          setError(res.data?.Error || "No results found.");
        }
      }
    //    catch (err) {
    //     setError("Network error. Please try again.");
    //   }
       finally {
        setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []); // initial mount

  const onSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await api.get("/", { params: { s: query || "a", apikey: OMDB_KEY, type: "movie" } });
      if (res.data?.Search) setResults(res.data.Search);
      else {
        setResults([]);
        setError(res.data?.Error || "No results found.");
      }
    } 
     finally {
      setLoading(false);
    }
  };

  return (
    <Shell>
      <Header>
        <Brand to="/">🎬 Prasanna's CineScope</Brand>
        <nav>
          <Button type="button" onClick={() => inputRef.current?.focus()}>Focus Search</Button>
          <Button as={Link} to="/about">About</Button>
        </nav>
      </Header>

      <SearchBar onSubmit={onSearch} aria-label="Search movies">
        <Input
          ref={inputRef}
          placeholder="Search movies e.g. Inception, Dune, KGF…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
        <Button type="button" onClick={() => { setQuery(""); inputRef.current?.focus(); }}>Clear</Button>
      </SearchBar>

      <div style={{ margin: "18px 0", color: "var(--muted)" }}>
        {loading ? "Loading…" : error ? error : results.length ? `${results.length} results` : ""}
      </div>

      <Grid>
        {results.map((m) => (
          <MovieCard key={m.imdbID} movie={m} />
        ))}
      </Grid>
    </Shell>
  );
}