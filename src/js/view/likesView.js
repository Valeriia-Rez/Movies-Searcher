export default class ViewLikes {

    toggleLikeBtn(isLiked) {
        const iconString = isLiked ? `<i class="fas fa-heart"></i>` : `<i class="far fa-heart"></i>`;
        const icon = document.querySelector(".section__icon");
        icon.innerHTML = iconString;

    };





    /*deleteLike(id){
        const el = document.querySelector("")
    }*/
}