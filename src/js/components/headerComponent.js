export default class Header {
    constructor() {

    }

    renderHeader() {
        let header = document.querySelector("[data-selector='header']");
        header.innerHTML = `
                <div class="row header__wrapper align-items-center py-4">
                    <div class="col-sm-6 col-lg-3 pl-4 pt-2">
                        <h3><a href="#">ONLINE MOVIES</a></h3>
                    </div>
                    <div class="col-lg-5">
                        <nav>
                            <ul class="list-group list-group-horizontal header__menu justify-content-between">
                                <li><a href="#" class="header__link">Home</a></li>
                                <li><a href="#" class="header__link">New Releases</a></li>
                                <li><a href="#" class="header__link">Most Popular</a></li>
                                <li><a href="#" class="header__link">News</a></li>
                                <li><a href="#" class="header__link">Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-lg-2 header__search d-flex flex-row align-items-center">
                        <input type="text" placeholder="search">
                        <button class="btn text-white header__icon" type="button"><i class="fas fa-search"></i></button>
                    </div>
                    <div class="col-lg-2 d-flex justify-content-around text-white">
                        <span class="pl-5 header__icon"><i class="fas fa-heart"></i></span>
                        <span class="header__icon"><i class="fas fa-shopping-bag"></i></span>
                    </div>
                </div>
        `;
    }
}