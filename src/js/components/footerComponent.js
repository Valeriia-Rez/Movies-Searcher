export const renderFooter = () => {
    let footer = document.querySelector("[data-selector='footer']");
    footer.innerHTML = `
                <div class="footer__wrapper text-white py-4 text-center">
                    <p>Developed in vanilla JS by Valeriia Rieznik</p>
                    <div class="col-lg-6 mx-auto">
                        <span class="pr-5 footer__icon">
                            <a href="https://www.linkedin.com/in/valeriia-rieznik-a8310b195/" class="text-white">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </span>
                        <span class="footer__icon">
                            <a href="https://github.com/Valeriia-Rez" class="text-white">
                                <i class="fab fa-github"></i>
                            </a>
                        </span>
                    </div>
                    <h4 class="pt-2">Contact</h4></<h4>
                    <span>Phone: +38 (066) 99-88-247</span>
                    <br>
                    <span>Email: valeria09122016@gmail.com</span>
                </div>
    `;
}