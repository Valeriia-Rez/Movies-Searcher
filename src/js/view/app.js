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
            <div class="container pb-4" data-selector="main-content">
                <div class="d-flex justify-content-between py-4 px-3">
                    <h2>Popular Movies</h2>
                    <a href="#" class="btn btn-outline-secondary align-self-center" data-selector="popular-movies-button">View all movies</a>
                </div>
                <section class="section d-flex flex-wrap text-center" data-selector="popular"></section>
                <div class="d-flex justify-content-between py-4 px-3">
                    <h2 class="">Highest Rated Movies</h2>
                    <a href="#" class="btn btn-outline-secondary align-self-center" data-selector="topRated-movies-button">View all movies</a>
                </div>
                <section class="section d-flex flex-wrap text-center" data-selector="top-rated"></section>
                <div class="d-flex justify-content-between py-4 px-3">
                    <h2>Now playing</h2>
                    <a href="#" class="btn btn-outline-secondary align-self-center" data-selector="nowPlaying-movies-button">View all movies</a>
                </div>
                <section class="section d-flex flex-wrap text-center" data-selector="now_playing"></section>
                <div class="d-flex justify-content-between py-4 px-3">
                    <h2>Upcoming</h2>
                    <a href="#" class="btn btn-outline-secondary align-self-center" data-selector="upcoming-movies-button">View all movies</a>
                </div>
                <section class="section d-flex flex-wrap text-center" data-selector="upcoming"></section>
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
        const mainContent = document.querySelector("[data-selector='main-content']");
        const section = `<div class="d-flex flex-wrap py-5 section" data-selector="${props.selector}"></div>`;
        mainContent.innerHTML = section;
        this.renderMoviesList(props);
    }

    renderMoviesItem(props) {
        const { result, url, size } = props;
        const mainContent = document.querySelector("[data-selector='main-content']");
        const section = `
                    <div class="row py-4 section justify-content-between">
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="section__title section__detailsTitle text-center pb-3"><h3>${result.title}</h3></div>
                           
                            <div class="pb-2"><img src="${url}${size}/${result.poster_path}" class="section__img section__details w-100" alt="${result.title}"></div>
                        </div>   
                        <div class="col-12 col-md-6 col-lg-7 section__description pl-4 pt-2 pt-md-5 mt-md-1">
                            <div><h6><strong>Release date:</strong> ${result.release_date}</h6></div>
                            <div class="pb-2"><h6><strong>${result.genres[1].name}, ${result.genres[0].name}</strong></h6></div>
                            <div class="text-justify"><p>${result.overview}</p></div>
                            <div><h6><strong>Country:</strong> ${result.production_countries[0].name}</h6></div>
                            <div><h6><strong>Language:</strong> ${result.spoken_languages[0].name}</h6></div>
                            <div><span>${result.vote_average}</span></div>
                        </div>
                       
                    </div>`;
        mainContent.innerHTML = section;
    }
}