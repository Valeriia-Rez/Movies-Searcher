import "../scss/main.scss";
import "regenerator-runtime/runtime";
import RenderApp from "./view/viewController";

const view = new RenderApp();


const showMobileMenu = () => {
    view.openMobileMenu();
}

const hiddenMobileMenu = () => {
    view.closeMobileMenu();
}

const renderComponents = () => {
    view.renderHeaderComponents();
    view.renderFooterComponent();
    document.querySelector("[data-selector='mobile-open']").addEventListener("click", showMobileMenu);
    document.querySelector("[data-selector='mobile-close']").addEventListener("click", hiddenMobileMenu);

}


window.addEventListener("DOMContentLoaded", renderComponents);