import "../scss/main.scss";
import "regenerator-runtime/runtime";
import RenderApp from "./view/viewController";
import Model from "./model/modelController";
import Images from "./model/getImages";

const view = new RenderApp();
const model = new Model();
const images = new Images();


const showMobileMenu = () => {
    view.openMobileMenu();
}


const hiddenMobileMenu = () => {
    view.closeMobileMenu();
}

const renderComponents = async() => {
    view.renderHeaderComponents();
    view.renderFooterComponent();
    await model.getListMovies();
    await images.getImages();

    view.displayPopularMovies(model.result, images.secure_url, images.poster_sizes);

    document.querySelector("[data-selector='mobile-open']").addEventListener("click", showMobileMenu);
    document.querySelector("[data-selector='mobile-close']").addEventListener("click", hiddenMobileMenu);

}


window.addEventListener("DOMContentLoaded", renderComponents);