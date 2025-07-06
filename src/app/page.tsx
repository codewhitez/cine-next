export const dynamic = "force-dynamic";

import { fetchGenres, fetchPopularMovies } from "@/utils/api";
import HomeClient from "@/components/HomeClient";

export default async function Home() {
    const movies = await fetchPopularMovies(1);
    const genres = await fetchGenres();

    return <HomeClient initialMovies={movies} genres={genres} />;
}
