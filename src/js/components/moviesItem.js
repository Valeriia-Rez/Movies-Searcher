export const renderMoviesItem = (props) => {
    const { result, url, size, id } = props;
    const itemId = id;
    const productItemData = result.find(product => product.id === itemId);
    console.log(productItemData, "id");
    let productHtml = `
   <div class="d-flex flex-wrap py-5 section">
   
        <div><img src="${url}${size}/${productItemData.poster_path}" alt="${productItemData.title}" class="section__img w-100"></<img></div>
        <div class="section__title pt-2"><p>${productItemData.title}</p></div>
        </div>
      
`;
    const mainContent = document.querySelector("[data-selector='main-content']");

    mainContent.innerHTML = productHtml;
};