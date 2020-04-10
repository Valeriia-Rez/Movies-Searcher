export default class DisplayHighestRatedMovies {

    displayMovies(result, url, size) {
        result.forEach((item, index) => {
            if (index + 1 <= 4) {
                let html = `
                    <a href="#">
                        <div><img src="${url}${size}/${item.poster_path}" alt="${item.title}" class="section__img w-100"></<img></div>
                        <div class="section__title pt-2"><p>${item.title}</p></div>
                    </a>
                    `;

                const div = document.createElement("div");
                div.className = "col-12 col-md-6 col-lg-3";
                div.innerHTML = html;
                let highest = document.querySelector("[data-selector='highest']");
                highest.appendChild(div);
            }
        });
    }
}