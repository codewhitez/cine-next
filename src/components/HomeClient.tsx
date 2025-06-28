"use client";
import { useState } from "react";
import { Movie, Genre } from "@/types/tmdb";
import MovieCard from "@/components/MovieCard";
import GenreFilter from "@/components/GenreFilter";
import { fetchPopularMovies } from "@/utils/api";
import styles from "@/styles/Home.module.scss";

export default function HomeClient({
    initialMovies,
    genres,
}: {
    initialMovies: Movie[];
    genres: Genre[];
}) {
    const [movies, setMovies] = useState<Movie[]>(initialMovies);
    const [page, setPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const filteredMovies = selectedGenre
        ? movies.filter((movie) => movie.genre_ids.includes(selectedGenre))
        : movies;

    const handleLoadMore = async () => {
        setIsLoading(true);
        const nextPage = page + 1;
        try {
            const newMovies = await fetchPopularMovies(nextPage);
            setMovies((prev) => [...prev, ...newMovies]);
            setPage(nextPage);
        } catch (err) {
            console.error("Failed to load more movies:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <GenreFilter
                    genres={genres}
                    selected={selectedGenre}
                    onSelect={setSelectedGenre}
                />
            </aside>
            <main className={styles.main}>
                <div className={styles.grid}>
                    {filteredMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
                <button className={styles.loadMore} onClick={handleLoadMore}>
                    {isLoading ? "Loading..." : "Load More"}
                </button>
            </main>
        </div>
    );
}
