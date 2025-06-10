const audio = document.getElementById("audio-element");
const playButton = document.getElementById("play");
const playIcon = playButton.querySelector("i");

playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
    } else {
        audio.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
    }
})

const likeButton = document.getElementById("like-button");
const likeIcon = likeButton.querySelector("i");

likeButton.addEventListener("click", () => {
    if (likeIcon.classList.contains("fa-regular") && likeIcon.classList.contains("fa-heart")) {
        likeIcon.classList.remove("fa-regular", "fa-heart");
        likeIcon.classList.add("fa-solid", "fa-heart-circle-plus");
    } else {
        likeIcon.classList.remove("fa-solid", "fa-heart-circle-plus");
        likeIcon.classList.add("fa-regular", "fa-heart");
    }
});
