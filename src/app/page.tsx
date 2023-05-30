"use client"

import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';

type Props = {}

export default function Home({ }: Props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!movies) return

    const fetchData = async () => {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results)
      console.log("🚀  data.results:", movies)

    };
    fetchData();
  }, []);

  return (
    <div>
      <div className='grid grid-cols-fluid gap-3'>
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          ></MovieCard>
        ))}
      </div>
    </div>
  )
}