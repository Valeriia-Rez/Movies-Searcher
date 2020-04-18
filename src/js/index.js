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
    const img = `${images.secure_url}${images.poster_sizes[3]}/${moviesDetails.result.poster_path}`;
    if (!likes.isLiked(itemId)) {

        likes.addLike(
            itemId,
            moviesDetails.result.title,
            img
        );

        console.log(likes.likes, "lik")
        app.toggleBtn(true);

        document.querySelector("[data-selector='header-icon']").addEventListener("click", () => app.renderLikeView(likes.likes));

    } else {

        app.toggleBtn(false);

    }


}

const renderMoviesItem = async(e) => {


    if (e) {
        const itemId = e.target.parentElement.parentElement.dataset.id;
        location.hash = itemId;
    }

    const id = location.hash.replace("#", "");
    await moviesDetails.getMoviesDetails(id);

    let props = {
        result: moviesDetails.result,
        url: images.secure_url,
        size: images.poster_sizes[3],
        isLiked: likes.isLiked(id)
    }
    app.renderMoviesItem(props);

    document.querySelector("[data-selector='movies-icon']").addEventListener("click", controlLike);


}

const renderPopularMoviesSection = async(sectionType) => {
    const popular = movies.result[sectionType];
    location.hash = sectionType;
    console.log(location.hash, "win");
    const sectionTypeFromURL = location.hash.replace("#", "");
    let props = {
        url: images.secure_url,
        size: images.poster_sizes[2],
        selector: sectionTypeFromURL,
        page: "section"
    }
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
    const main = document.querySelector("[data-selector='app']");
    main.innerHTML = "";
    app.render();

    const page = location.hash;
    console.log(page, "page")
    if (!page) {
        console.log("hear", page);
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
    } else if (["#popular", "#top_rated", "#now_playing", "#upcoming"].includes(page)) {
        await images.getImages();
        renderPopularMoviesSection(page.replace("#", ""));
    } else {
        await images.getImages();
        renderMoviesItem();
    }
    console.log("render")


    document.querySelectorAll("[data-selector='mobile-link']").forEach(item => item.addEventListener("click", app.setActiveStateOnNavigation));

    document.querySelectorAll("[data-selector='movies-item']").forEach(item => item.addEventListener("click", renderMoviesItem));
    document.querySelector("[data-selector='home-movies-link']").addEventListener("click", renderApp);
    document.querySelector("[data-selector='upcoming-movies-link']").addEventListener("click", () => renderPopularMoviesSection("upcoming"));
    document.querySelector("[data-selector='nowPlaying-movies-link']").addEventListener("click", () => renderPopularMoviesSection("now_playing"));
    document.querySelector("[data-selector='popular-movies-link']").addEventListener("click", () => renderPopularMoviesSection("popular"));
    document.querySelector("[data-selector='highest-movies-link']").addEventListener("click", () => renderPopularMoviesSection("top_rated"));
    document.querySelector("[data-selector='upcoming-movies-button']").addEventListener("click", () => renderPopularMoviesSection("upcoming"));
    document.querySelector("[data-selector='nowPlaying-movies-button']").addEventListener("click", () => renderPopularMoviesSection("now_playing"));
    document.querySelector("[data-selector='popular-movies-button']").addEventListener("click", () => renderPopularMoviesSection("popular"));
    document.querySelector("[data-selector='topRated-movies-button']").addEventListener("click", () => renderPopularMoviesSection("top_rated"));
    document.querySelector("[data-selector='mobile-open']").addEventListener("click", app.openMobileMenu);
    document.querySelector("[data-selector='mobile-close']").addEventListener("click", app.closeMobileMenu);
}


window.addEventListener("DOMContentLoaded", renderApp);
/*window.addEventListener("hashchange", renderApp);*/