import Header from "../components/headerComponent";
import { renderFooter } from "../components/footerComponent";

const header = new Header();


export default class RenderApp {

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
}