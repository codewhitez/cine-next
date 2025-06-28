import React from "react";
import { Movie } from "@/types/tmdb";
import styles from "./MovieCard.module.scss";

interface Props {
    movie: Movie;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300"; // Portrait image size

export default function MovieCard({ movie }: Props) {
    return (
        <div className={styles.card}>
            <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className={styles.poster}
                loading="lazy"
            />
            <h3 className={styles.title}>{movie.title}</h3>
        </div>
    );
}
