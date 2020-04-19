import "../scss/main.scss";
import "regenerator-runtime/runtime";
import App from "./view/app";
import Movies from "./model/movies";
import Images from "./model/images";
import MoviesDetails from "./model/moviesDetails";
import Likes from "./model/likes";

const app = new App();
const imagesModel = new Images();
const movies = new Movies();
const moviesDetailsModel = new MoviesDetails();
const likes = new Likes();

const controlLike = (id) => {

    const img = `${imagesModel.result.secure_url}${imagesModel.result.poster_sizes[3]}/${moviesDetailsModel.result.poster_path}`;
    if (!likes.isLiked(id)) {
        likes.addLike(
            id,
            moviesDetailsModel.result.title,
            img
        );
        app.toggleLikeBtn(true);
        console.log(likes.likes, "likes");
        document.querySelector("[data-selector='header-icon']").addEventListener("click", () => app.renderLikeView(likes.likes));
    } else {
        likes.deleteLike(id);
        app.toggleLikeBtn(false);
    }
}

const renderMoviesItem = async(e) => {
    if (e) {
        const itemId = e.target.parentElement.parentElement.dataset.id;
        location.hash = itemId;
    }
    const id = location.hash.replace("#", "");
    console.log(id, "id")
    const moviesDetails = await moviesDetailsModel.getMoviesDetails(id);
    let props = {
        result: moviesDetails,
        url: imagesModel.result.secure_url,
        size: imagesModel.result.poster_sizes[3],
        isLiked: likes.isLiked(id)
    }
    app.renderMoviesItem(props);
    document.querySelector("[data-selector='movies-icon']").addEventListener("click", () => controlLike(id));
}

const renderPopularMoviesSection = async(sectionType) => {
    const images = await imagesModel.getImages();
    const popular = movies.result && movies.result[sectionType];
    console.log(popular, "pop")
    location.hash = sectionType;
    const sectionTypeFromURL = location.hash.replace("#", "");
    let props = {
        url: images.secure_url,
        size: images.poster_sizes[2],
        selector: sectionTypeFromURL,
        page: "section"
    }
    console.log(props, "props")
    if (popular) {
        props = {...props, result: popular };
        app.renderSection(props);
    } else {
        const popularMoviesResult = await movies.getListMovies(sectionTypeFromURL);
        props = {...props, result: popularMoviesResult };
        app.renderSection(props);
    }
    document.querySelectorAll("[data-selector='movies-item']").forEach(item => item.addEventListener("click", renderMoviesItem));
}

const renderApp = async() => {
    app.render();
    const page = location.hash;
    const images = await imagesModel.getImages();
    if (["#popular", "#top_rated", "#now_playing", "#upcoming"].includes(page)) {
        return renderPopularMoviesSection(page.replace("#", ""), images);
    }
    if (page) {
        return renderMoviesItem();
    }
    const main = document.querySelector("[data-selector='main-content']");
    let popularMoviesResult, highestMoviesResult, nowPlayingMoviesResult, upcomingMoviesResult;

    if (!page) {
        main.innerHTML = app.renderHomePageContent();
        popularMoviesResult = await movies.getListMovies("popular");
        highestMoviesResult = await movies.getListMovies("top_rated");
        nowPlayingMoviesResult = await movies.getListMovies("now_playing");
        upcomingMoviesResult = await movies.getListMovies("upcoming");
    }
    const popularMoviesProps = {
        result: popularMoviesResult,
        url: images.secure_url,
        size: images.poster_sizes[2],
        selector: "popular",
        page: "main"
    }
    console.log(popularMoviesProps, "pop")
    app.renderMoviesList(popularMoviesProps);

    const highestMoviesProps = {
        result: highestMoviesResult,
        url: images.secure_url,
        size: images.poster_sizes[2],
        selector: "top-rated",
        page: "main"
    }
    app.renderMoviesList(highestMoviesProps);

    const nowPlayingMoviesProps = {
        result: nowPlayingMoviesResult,
        url: images.secure_url,
        size: images.poster_sizes[2],
        selector: "now_playing",
        page: "main"
    }
    app.renderMoviesList(nowPlayingMoviesProps);

    const upcomingMoviesProps = {
        result: upcomingMoviesResult,
        url: images.secure_url,
        size: images.poster_sizes[2],
        selector: "upcoming",
        page: "main"
    }
    app.renderMoviesList(upcomingMoviesProps);


    document.querySelectorAll(".menu").forEach(item => item.addEventListener("click", app.setActiveStateOnDesktopNavigation));
    document.querySelectorAll("[data-selector='mobile-link']").forEach(item => item.addEventListener("click", app.setActiveStateOnMobileNavigation));
    document.querySelectorAll("[data-selector='movies-item']").forEach(item => item.addEventListener("click", renderMoviesItem));
    document.querySelectorAll("[data-selector='home-movies-link']").forEach(item => item.addEventListener("click", renderApp));
    document.querySelectorAll("[data-selector='upcoming-movies-link']").forEach(item => item.addEventListener("click", () => renderPopularMoviesSection("upcoming")));
    document.querySelectorAll("[data-selector='nowPlaying-movies-link']").forEach(item => item.addEventListener("click", () => renderPopularMoviesSection("now_playing")));
    document.querySelectorAll("[data-selector='popular-movies-link']").forEach(item => item.addEventListener("click", () => renderPopularMoviesSection("popular")));
    document.querySelectorAll("[data-selector='highest-movies-link']").forEach(item => item.addEventListener("click", () => renderPopularMoviesSection("top_rated")));
    document.querySelector("[data-selector='upcoming-movies-button']").addEventListener("click", () => renderPopularMoviesSection("upcoming"));
    document.querySelector("[data-selector='nowPlaying-movies-button']").addEventListener("click", () => renderPopularMoviesSection("now_playing"));
    document.querySelector("[data-selector='popular-movies-button']").addEventListener("click", () => renderPopularMoviesSection("popular"));
    document.querySelector("[data-selector='topRated-movies-button']").addEventListener("click", () => renderPopularMoviesSection("top_rated"));
    document.querySelector("[data-selector='mobile-open']").addEventListener("click", app.openMobileMenu);
    document.querySelector("[data-selector='mobile-close']").addEventListener("click", app.closeMobileMenu);
}


window.addEventListener("DOMContentLoaded", renderApp);
window.addEventListener("hashchange", renderApp);