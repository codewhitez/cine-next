"use client";

import styles from "@/styles/Home.module.scss";

export default function LoadMore() {
    const handleLoadMore = () => {
        // Logic to load more movies
        console.log("Load more movies");
    };

    return (
        <button className={styles.loadMore} onClick={handleLoadMore}>
            Load More
        </button>
    );
}
