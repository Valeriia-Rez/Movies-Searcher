import "../scss/main.scss";
import "regenerator-runtime/runtime";


import RenderApp from "./view/viewController";

const view = new RenderApp();

const renderComponents = () => {
    view.renderHeaderComponents();
}
window.addEventListener("DOMContentLoaded", renderComponents);