import Header from "../components/headerComponent";
import { renderFooter } from "../components/footerComponent";

const header = new Header();


export default class RenderApp {
    constructor() {

    }

    renderFooterComponent() {
        renderFooter();
    }

    renderHeaderComponents() {
        header.renderHeader();
    }

    openMobileMenu() {
        header.openMobileHandler();
    }

    closeMobileMenu() {
        header.closeMobileHandler();
    }



    displayPopularMovies(result, url, size) {

        return result.forEach((item, index) => {
            if (index + 1 <= 4) {
                let html = `
              
                        <div class=""><img src="${url}${size}/${item.poster_path}" alt="${item.original_title}" class="w-100"></div>
                        <div class=""><p>${item.original_title}</p></div>
                        <div class=""><p>${item.vote_average}</p></div>
                       
                `;

                const div = document.createElement("div");
                div.className = "col-12 col-md-6 col-lg-3";
                div.innerHTML = html;
                let popular = document.querySelector("[data-selector='popular']");
                popular.appendChild(div);
            }





        });



    }
}