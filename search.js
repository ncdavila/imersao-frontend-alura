const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("playlists-result");

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((results) => displayResults(results));
}
function displayResults(results) {
    hidePlaylists();
    const artistImage = document.getElementById("artist-img");
    const artistName = document.getElementById("artist-name");

    results.forEach((element) => {
        artistImage.src = element.urlImg;
        artistName.innerText = element.name;
    });
    resultArtist.classList.remove("hidden");
}
function hidePlaylists() {
    playlistContainer.classList.add("hidden");
}
searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
        resultArtist.classList.add("hidden");
        playlistContainer.classList.remove("hidden");
        return;
    }
    requestApi(searchTerm);
});
