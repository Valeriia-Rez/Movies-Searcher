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
                                <li><a href="#" class="header__link px-2 px-lg-3">Home</a></li>
                                <li><a href="#" class="header__link pr-2 pr-lg-3">Highest Rated</a></li>
                                <li><a href="#" class="header__link pr-2 pr-lg-3">Most Popular</a></li>
                                <li><a href="#" class="header__link pr-2 pr-lg-3">Now playing</a></li>
                                <li><a href="#" class="header__link">Comming soon</a></li>
                            </ul>
                        </nav>
                    </div>
                
                        <div class="header__search d-flex flex-row align-items-center">
                            <input type="search" class="d-none d-lg-block header__searchField px-1" placeholder="search" data-selector="header-searchField">
                            <button class="btn text-white header__icon" type="button" data-selector="search-icon"><i class="fas fa-search"></i></button>
                        </div>
                   
                    <div class="header__icon text-white"><i class="fas fa-heart icon"></i></div>
                    <div class="header__icon text-white"><i class="fas fa-shopping-bag icon"></i></div>
                </div>
               
                <div class="header__mobile d-none d-md-none" data-selector="mobile-menu">
                <nav>
                    <ul class="pl-3 py-2 header__menu">
                        <li><a href="#" class="header__link">Home</a></li>
                        <li><a href="#" class="header__link">Highest Rated</a></li>
                        <li><a href="#" class="header__link">Most Popular</a></li>
                        <li><a href="#" class="header__link">Now playing</a></li>
                        <li><a href="#" class="header__link">Comming Soon</a></li>
                    </ul>
                </nav>
            </div>
            </header>
            `;

    }
}