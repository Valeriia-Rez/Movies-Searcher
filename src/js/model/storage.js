export default class Storage {
    storeToCollection(movie) {
        let collection;
        if (localStorage.getItem("collection") === null) {
            collection = {
                items: [movie],
                itemsCount: 1,
            };
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        } else {
            this.updateShoppingCart(product);
        }
    }
}