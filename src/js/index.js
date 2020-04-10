import "../scss/main.scss";
import "regenerator-runtime/runtime";
import RenderApp from "./view/viewController";
import GetPopularMovies from "./model/getListMovies";
import Images from "./model/getImages";
import DisplayPopularMovies from "./view/viewPopularMoviesController";
import GetHighestRatedMovies from "./model/getHighestRatedMovies";
import DisplayHighestRatedMovies from "./view/viewHighestRatedMoviesController";

const renderApp = new RenderApp();
const popularMovies = new GetPopularMovies();
const images = new Images();
const popular = new DisplayPopularMovies();
const highestMovies = new GetHighestRatedMovies();
const highest = new DisplayHighestRatedMovies();


const showMobileMenu = () => {
    renderApp.openMobileMenu();
}

const hiddenMobileMenu = () => {
    renderApp.closeMobileMenu();
}

const renderComponents = async() => {
    renderApp.renderHeaderComponents();
    renderApp.renderFooterComponent();
    await popularMovies.getListMovies();
    await images.getImages();
    popular.displayMovies(popularMovies.result, images.secure_url, images.poster_sizes);
    await highestMovies.getListHighestRatedMovies();
    highest.displayMovies(highestMovies.result, images.secure_url, images.poster_sizes);
    document.querySelector("[data-selector='mobile-open']").addEventListener("click", showMobileMenu);
    document.querySelector("[data-selector='mobile-close']").addEventListener("click", hiddenMobileMenu);
}


window.addEventListener("DOMContentLoaded", renderComponents);