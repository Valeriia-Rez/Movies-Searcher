import Header from "../components/headerComponent";

const header = new Header();

export default class RenderApp {
    constructor() {

    }

    renderHeaderComponents() {
        header.renderHeader();
    }
}