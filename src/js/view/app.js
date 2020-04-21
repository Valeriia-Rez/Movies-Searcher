import Header from "../components/headerComponent";
import { renderFooter } from "../components/footerComponent";
import { renderMovies } from "../components/moviesList";

const header = new Header();

export default class App {

    renderMoviesList(props) {
        renderMovies(props);
    }

    renderHomePageContent() {
        return `
            <div class="d-flex justify-content-between py-4 px-3">
                <h2>Popular Movies</h2>
                <button class="btn btn-outline-secondary align-self-center" data-selector="popular-movies-button">View all movies</a>
            </div>
            <section class="section d-flex flex-wrap text-center" data-selector="popular"></section>
            <div class="d-flex justify-content-between py-4 px-3">
                <h2>Highest Rated Movies</h2>
                <button class="btn btn-outline-secondary align-self-center" data-selector="topRated-movies-button">View all movies</button>
            </div>
            <section class="section d-flex flex-wrap text-center" data-selector="top-rated"></section>
            <div class="d-flex justify-content-between py-4 px-3">
                <h2>Now playing</h2>
                <button class="btn btn-outline-secondary align-self-center" data-selector="nowPlaying-movies-button">View all movies</button>
            </div>
            <section class="section d-flex flex-wrap text-center" data-selector="now_playing"></section>
            <div class="d-flex justify-content-between py-4 px-3">
                <h2>Upcoming</h2>
                <button class="btn btn-outline-secondary align-self-center" data-selector="upcoming-movies-button">View all movies</button>
            </div>
            <section class="section d-flex flex-wrap text-center" data-selector="upcoming"></section>
            `;
    }

    render(likesLength = 0) {
        let html = `
            ${header.renderHeader(likesLength)}
            <div class="container pb-4" data-selector="main-content">
               
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

    setActiveStateOnMobileNavigation(e) {
        document.querySelectorAll("[data-selector='mobile-link']").forEach(item => {
            if (item.classList.contains("active")) {
                item.classList.remove("active");
            }
        })
        const current = e.target.parentElement;
        current.classList.add("active");
    }

    setActiveStateOnDesktopNavigation(e) {

        console.log("set")
        document.querySelectorAll(".menu").forEach(item => {
            if (item.classList.contains("activeDesktop")) {
                item.classList.remove("activeDesktop");
            }
        });
        const current = e.target.parentElement;
        console.log(current, "cur")
        current.classList.add("activeDesktop");
        console.log(current, "act")
    }

    renderSection(props) {
        const mainContent = document.querySelector("[data-selector='main-content']");
        const section = `
        <div>
            <h1>${props.sectionTitle} Movies</h1>
            <div class="d-flex flex-wrap pt-5 section" data-selector="${props.selector}"></div>
        </div>`;
        mainContent.innerHTML = section;
        this.renderMoviesList(props);
    }

    renderMoviesItem(props) {
        const { result, url, size, isLiked } = props;
        const mainContent = document.querySelector("[data-selector='main-content']");
        const section = `   <div class="row section">
                                <div class="col-12 col-md-6  col-lg-4 pt-5 section__title section__detailsTitle text-center"><h3>${result.title}</h3>
                                </div>                         
                            </div>
                            <div class="row py-3 section justify-content-between">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div><img src="${url}${size}/${result.poster_path}" class="section__img section__details w-100" alt="${result.title}"></div>
                                </div> 
                                <div class="col-12 col-md-6 col-lg-7 section__description pl-md-4 pt-3">
                                    <div><h6><strong>Release date:</strong> ${result.release_date}</h6></div>
                                    <div class="pb-2"><h6><strong>${result.genres.map(item => item.name).join(", ")}</strong></h6></div>
                                    <div class="text-justify"><p>${result.overview}</p></div>
                                    <div><h6><strong>Countries:</strong> ${result.production_countries.map(item => item.name).join(", ")}</h6></div>
                                    <div><h6><strong>Languages:</strong> ${result.spoken_languages.map(item => item.name).join(", ")}</h6></div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div><h3>Vote average : ${result.vote_average}</h3></div>
                                        <div class="section__icon" data-id="${result.id}" data-selector="movies-icon"><i class="${isLiked ? "fas fa-heart" : "far fa-heart"}"></i></div>
                                    </div>
                                </div>
                            </div>`;
        mainContent.innerHTML = section;
    }

    toggleLikeBtn(isLiked) {
        const iconString = isLiked ? `<i class="fas fa-heart"></i>` : `<i class="far fa-heart"></i>`;
        const icon = document.querySelector(".section__icon");
        icon.innerHTML = iconString;
    }

    renderLikeView(arr) {
            const mainContent = document.querySelector("[data-selector='main-content']");
            const html = `<div class="row section pt-5">
                <div><h1>Liked Movies</h1></div>
            
            ${arr.map(item =>
            `<div class="col-12 col-sm-6 col-lg-3 pb-2" data-selector="movies-item" data-id="${item.id}">
                <div>
                    <img src="${item.img}" class="section__img w-100" alt="${item.title}">
                </div>
                <div class="pt-2 section__title section__detailsTitle text-center">
                    <h3>${item.title}</h3>
                </div>
            </div>`
            ).join("")}
            </div>`
      
        mainContent.innerHTML = html;

    }
}