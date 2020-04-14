export const renderMovies = (props) => {
    const { result, url, size, selector, page } = props;
    result.forEach((item, index) => {

        if (page === "main" && index + 1 <= 4) {
            let html = `
                    <div data-id="${item.id}" data-selector="movies-item">
                        <div><img src="${url}${size}/${item.poster_path}" alt="${item.title}" class="section__img"></<img></div>
                        <div class="section__title pt-2"><h4>${item.title}</h4></div>
                    </div>
                    `;

            const div = document.createElement("div");
            div.className = "col-12 col-sm-6 col-lg-3";
            div.innerHTML = html;
            let popular = document.querySelector(`[data-selector='${selector}']`);
            popular.appendChild(div);
        } else if (page === "section") {
            let html = `
                <div data-id="${item.id}" data-selector="movies-item">
                    <div><img src="${url}${size}/${item.poster_path}" alt="${item.title}" class="section__img"></<img></div>
                    <div class="section__title pt-2"><h4>${item.title}</h4></div>
                </div>
                `;

            const div = document.createElement("div");
            div.className = "col-12 col-md-6 col-lg-3";
            div.innerHTML = html;
            let popular = document.querySelector(`[data-selector='${selector}']`);
            popular.appendChild(div);
        } else { return }
    });
}