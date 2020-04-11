import Header from "../components/headerComponent";
import { renderFooter } from "../components/footerComponent";
import { renderMovies } from "../components/moviesList";

const header = new Header();

export default class App {

    renderMoviesList(props) {
        renderMovies(props);
    }

    render() {

        let html = `
      ${header.renderHeader()}
        <div class="container" data-selector="main-content">
        <div class="d-flex justify-content-between py-4 px-3">
        <h2>Popular Movies</h2>
        <a href="#" class="btn btn-outline-secondary align-self-center" data-selector="popular-movies-button">View all movies</a>
    </div>
    <section class="section d-flex flex-wrap" data-selector="popular"></section>
    <div class="d-flex justify-content-between py-4 px-3">
        <h2>Highest Rated Movies</h2>
        <a href="#" class="btn btn-outline-secondary align-self-center" data-selector="topRated-movies-button">View all movies</a>
    </div>
    <section class="section d-flex flex-wrap" data-selector="top-rated"></section>
    </div>
    ${renderFooter()}
        `;

        const app = document.querySelector("[data-selector='app']");
        app.innerHTML = html;
    }

    openMobileMenu() {
        header.openMobileHandler();
    }

    closeMobileMenu() {
        header.closeMobileHandler();
    }

    renderSection(props) {
        console.log(props);
        const mainContent = document.querySelector("[data-selector='main-content']");
        const section = `<div class="d-flex flex-wrap pt-5 section" data-selector="${props.selector}"></div>`;
        mainContent.innerHTML = section;
        this.renderMoviesList(props);
    }
}