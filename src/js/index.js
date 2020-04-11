import "../scss/main.scss";
import "regenerator-runtime/runtime";
import App from "./view/app";
import Movies from "./model/movies";
import Images from "./model/images";

const app = new App();
const images = new Images();
const movies = new Movies();

const renderPopularMoviesSection = async(sectionType) => {
    const popular = movies.result[sectionType];
    let props = {
        url: images.secure_url,
        size: images.poster_sizes,
        selector: sectionType,
        page: "section"
    }
    if (popular.length > 0) {
        props = {...props, result: popular };
        app.renderSection(props);
    } else {
        const popularMoviesResult = await movies.getListMovies(sectionType);
        props = {...props, result: popularMoviesResult };
        app.renderSection(props);
    }
}

const renderApp = async() => {
    app.render();
    const popularMoviesResult = await movies.getListMovies("popular");
    await images.getImages();
    const popularMoviesProps = {
        result: popularMoviesResult,
        url: images.secure_url,
        size: images.poster_sizes,
        selector: "popular",
        page: "main"
    }
    app.renderMoviesList(popularMoviesProps);

    const highestMoviesResult = await movies.getListMovies("top_rated");
    const highestMoviesProps = {
        result: highestMoviesResult,
        url: images.secure_url,
        size: images.poster_sizes,
        selector: "top-rated",
        page: "main"
    }
    app.renderMoviesList(highestMoviesProps);

    const nowPlayingMoviesResult = await movies.getListMovies("now_playing");
    const nowPlayingMoviesProps = {
        result: nowPlayingMoviesResult,
        url: images.secure_url,
        size: images.poster_sizes,
        selector: "now_playing",
        page: "main"
    }
    app.renderMoviesList(nowPlayingMoviesProps);

    const upcomingMoviesResult = await movies.getListMovies("upcoming");
    const upcomingMoviesProps = {
        result: upcomingMoviesResult,
        url: images.secure_url,
        size: images.poster_sizes,
        selector: "upcoming",
        page: "main"
    }
    app.renderMoviesList(upcomingMoviesProps);

    document.querySelector("[data-selector='upcoming-movies-button']").addEventListener("click", () => renderPopularMoviesSection("upcoming"));
    document.querySelector("[data-selector='nowPlaying-movies-button']").addEventListener("click", () => renderPopularMoviesSection("now_playing"));
    document.querySelector("[data-selector='popular-movies-button']").addEventListener("click", () => renderPopularMoviesSection("popular"));
    document.querySelector("[data-selector='topRated-movies-button']").addEventListener("click", () => renderPopularMoviesSection("top_rated"));
    document.querySelector("[data-selector='mobile-open']").addEventListener("click", app.openMobileMenu);
    document.querySelector("[data-selector='mobile-close']").addEventListener("click", app.closeMobileMenu);
}


window.addEventListener("DOMContentLoaded", renderApp);