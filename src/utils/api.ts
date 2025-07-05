const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const headers = {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
};

export const fetchPopularMovies = async (page: number = 1) => {
    const res = await fetch(
        `${BASE_URL}/movie/popular?language=en-US&page=${page}`,
        {
            method: "GET",
            headers,
        }
    )
        .then((res) => res.json())
        .catch((err) => console.error(err));
    return res.results;
};

export const fetchGenres = async () => {
    const res = await fetch(`${BASE_URL}/genre/movie/list?language=en`, {
        method: "GET",
        headers,
    })
        .then((res) => res.json())
        .catch((err) => console.error(err));
    return res.genres;
};
