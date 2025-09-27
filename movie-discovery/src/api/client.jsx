import axios from "axios";

export const api = axios.create({ baseURL: "https://www.omdbapi.com/" });
export const OMDB_KEY = import.meta?.env?.VITE_OMDB_KEY || "thewdb"; // demo fallback