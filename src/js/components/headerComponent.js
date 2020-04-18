export default class Header {

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




    renderHeader() {
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
                                <li><a href="#" class="header__link px-2 px-lg-3" data-selector="home-movies-link">Home</a></li>
                                <li><a href="#top_rated" class="header__link pr-2 pr-lg-3" data-selector="highest-movies-link">Highest Rated</a></li>
                                <li><a href="#popular" class="header__link pr-2 pr-lg-3" data-selector="popular-movies-link">Most Popular</a></li>
                                <li><a href="#now_playing" class="header__link pr-2 pr-lg-3" data-selector="nowPlaying-movies-link">Now playing</a></li>
                                <li><a href="#upcoming" class="header__link" data-selector="upcoming-movies-link">Upcoming</a></li>
                            </ul>
                        </nav>
                    </div>
                
                        <div class="header__search d-flex flex-row align-items-center">
                            <input type="search" class="d-none d-lg-block header__searchField px-1" placeholder="search" data-selector="header-searchField">
                            <button class="btn text-white header__icon" type="button" data-selector="search-icon"><i class="fas fa-search"></i></button>
                        </div>
                      
                            <div class="header__icon text-white" data-selector="header-icon" >
                                <i class="fas fa-heart icon" data-selector="header-icon"></i>
                            </div>
                           
                        </div>
                  </div>
               
                <div class="header__mobile d-none d-md-none" data-selector="mobile-menu">
                <nav>
                    <ul class="header__menu" data-selector="mobile-menu">
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