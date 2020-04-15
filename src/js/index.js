import "../scss/main.scss";
import "regenerator-runtime/runtime";
import App from "./view/app";
import Movies from "./model/movies";
import Images from "./model/images";
import MoviesDetails from "./model/moviesDetails";
import Likes from "./model/likes";

const app = new App();
const images = new Images();
const movies = new Movies();
const moviesDetails = new MoviesDetails();
const likes = new Likes();

const controlLike = (e) => {
    const itemId = e.target.parentElement.dataset.id;

    if (!likes.isLiked(itemId)) {
        const newLike = likes.addLike(
            itemId,
            moviesDetails.result.title
        );
        console.log(newLike)
        app.toggleBtn(true);


    } else {
        likes.deleteLike(itemId);
        app.toggleBtn(false);
    }


}

const renderMoviesItem = async(e) => {
    const itemId = e.target.parentElement.parentElement.dataset.id;

    await moviesDetails.getMoviesDetails(itemId);
    let props = {
        result: moviesDetails.result,
        url: images.secure_url,
        size: images.poster_sizes[3],
        isLiked: likes.isLiked(itemId)
    }
    app.renderMoviesItem(props);

    document.querySelector("[data-selector='movies-icon']").addEventListener("click", controlLike);


}

const renderPopularMoviesSection = async(sectionType) => {
    const popular = movies.result[sectionType];
    let props = {
        url: images.secure_url,
        size: images.poster_sizes[2],
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
    document.querySelectorAll("[data-selector='movies-item']").forEach(item => item.addEventListener("click", renderMoviesItem));
}

const renderApp = async() => {
    app.render();
    const popularMoviesResult = await movies.getListMovies("popular");
    await images.getImages();
    const popularMoviesProps = {
        result: popularMoviesResult,
        url: images.secure_url,
        size: images.poster_sizes[2],
        selector: "popular",
        page: "main"
    }
    app.renderMoviesList(popularMoviesProps);
    console.log(popularMoviesResult);

    const highestMoviesResult = await movies.getListMovies("top_rated");
    const highestMoviesProps = {
        result: highestMoviesResult,
        url: images.secure_url,
        size: images.poster_sizes[2],
        selector: "top-rated",
        page: "main"
    }
    app.renderMoviesList(highestMoviesProps);

    const nowPlayingMoviesResult = await movies.getListMovies("now_playing");
    const nowPlayingMoviesProps = {
        result: nowPlayingMoviesResult,
        url: images.secure_url,
        size: images.poster_sizes[2],
        selector: "now_playing",
        page: "main"
    }
    app.renderMoviesList(nowPlayingMoviesProps);

    const upcomingMoviesResult = await movies.getListMovies("upcoming");
    const upcomingMoviesProps = {
        result: upcomingMoviesResult,
        url: images.secure_url,
        size: images.poster_sizes[2],
        selector: "upcoming",
        page: "main"
    }
    app.renderMoviesList(upcomingMoviesProps);


    document.querySelectorAll("[data-selector='movies-item']").forEach(item => item.addEventListener("click", renderMoviesItem));
    document.querySelectorAll("[data-selector='home-movies-link']").forEach(link => link.addEventListener("click", renderApp));
    document.querySelectorAll("[data-selector='upcoming-movies-link']").forEach(link => link.addEventListener("click", () => renderPopularMoviesSection("upcoming")));
    document.querySelectorAll("[data-selector='nowPlaying-movies-link']").forEach(link => link.addEventListener("click", () => renderPopularMoviesSection("now_playing")));
    document.querySelectorAll("[data-selector='popular-movies-link']").forEach(link => link.addEventListener("click", () => renderPopularMoviesSection("popular")));
    document.querySelectorAll("[data-selector='highest-movies-link']").forEach(link => link.addEventListener("click", () => renderPopularMoviesSection("top_rated")));
    document.querySelector("[data-selector='upcoming-movies-button']").addEventListener("click", () => renderPopularMoviesSection("upcoming"));
    document.querySelector("[data-selector='nowPlaying-movies-button']").addEventListener("click", () => renderPopularMoviesSection("now_playing"));
    document.querySelector("[data-selector='popular-movies-button']").addEventListener("click", () => renderPopularMoviesSection("popular"));
    document.querySelector("[data-selector='topRated-movies-button']").addEventListener("click", () => renderPopularMoviesSection("top_rated"));
    document.querySelector("[data-selector='mobile-open']").addEventListener("click", app.openMobileMenu);
    document.querySelector("[data-selector='mobile-close']").addEventListener("click", app.closeMobileMenu);
}


window.addEventListener("DOMContentLoaded", renderApp);