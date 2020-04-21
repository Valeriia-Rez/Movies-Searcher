export default class Header {
    constructor() {

    }

    openMobileHandler() {
        const openMobileBtn = document.querySelector("[data-selector='mobile-open']");
        const closeMobileBtn = document.querySelector("[data-selector='mobile-close']");
        const mobileMenu = document.querySelector("[data-selector='mobile-menu']");
        if (mobileMenu && mobileMenu.classList.contains("d-none")) {
            mobileMenu.classList.remove("d-none");
            openMobileBtn.classList.add("d-none");
            closeMobileBtn.classList.remove("d-none");
        }
    }

    closeMobileHandler() {
        const openMobileBtn = document.querySelector("[data-selector='mobile-open']");
        const closeMobileBtn = document.querySelector("[data-selector='mobile-close']");
        const mobileMenu = document.querySelector("[data-selector='mobile-menu']");
        if (!mobileMenu.classList.contains("d-none")) {
            mobileMenu.classList.add("d-none");
            openMobileBtn.classList.remove("d-none");
            closeMobileBtn.classList.add("d-none");
        }
    }


    renderHeader(likes) {
        return `
        <header class="header">
               <div class="header__wrapper d-flex justify-content-between align-items-center px-3 px-lg-4 py-4" data-selector="header-wrapper">
                    <div class="d-md-none">
                        <div data-selector="mobile-open">
                            <span class="gamburger"></span>
                            <span class="gamburger"></span>
                            <span class="gamburger"></span>
                        </div>
                        <span class="d-none text-white header__icon" data-selector="mobile-close">&#10006;</span>
                    </div>
                    <div class="pt-2">
                        <h3 class="header__heading"><a href="#">ONLINE MOVIES</a></h3>
                    </div>
                    <div class="header__navbar d-none d-md-block">
                        <nav class="header__nav">
                            <ul class="list-group list-group-horizontal header__menu">
                                <li class="menu activeDesktop" data-selector="home-movies-link"><a href="#" class="header__link px-2 px-lg-3" >Home</a></li>
                                <li class="menu" data-selector="highest-movies-link"><a href="#top_rated" class="header__link pr-2 pr-lg-3">Highest Rated</a></li>
                                <li class="menu" data-selector="popular-movies-link"><a href="#popular" class="header__link pr-2 pr-lg-3">Most Popular</a></li>
                                <li class="menu" data-selector="nowPlaying-movies-link"><a href="#now_playing" class="header__link pr-2 pr-lg-3">Now playing</a></li>
                                <li class="menu" data-selector="upcoming-movies-link"><a href="#upcoming" class="header__link">Upcoming</a></li>
                            </ul>
                        </nav>
                    </div>
                        <div class="header__icon text-white" data-selector="header-icon" >
                            <span class="pr-2" data-selector="likes-length">(${likes})</span><i class="fas fa-heart icon"></i>
                        </div>
                    </div>
                  </div>
                <div class="header__mobile d-none d-md-none" data-selector="mobile-menu">
                    <nav>
                        <ul class="header__menu">
                            <li class="mobile-link px-3 active" data-selector="mobile-link"><a href="#" class="header__link"  data-selector="home-movies-link">Home</a></li>
                            <li class="mobile-link px-3" data-selector="mobile-link"><a href="#top_rated" class="header__link"  data-selector="highest-movies-link">Highest Rated</a></li>
                            <li class="mobile-link px-3" data-selector="mobile-link"><a href="#popular" class="header__link" data-selector="popular-movies-link">Most Popular</a></li>
                            <li class="mobile-link px-3" data-selector="mobile-link"><a href="#now_playing" class="header__link" data-selector="nowPlaying-movies-link">Now playing</a></li>
                            <li class="mobile-link px-3" data-selector="mobile-link"><a href="#upcoming" class="header__link" data-selector="upcoming-movies-link">Comming Soon</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            `;
    }
}