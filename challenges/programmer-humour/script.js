


function fetchComic() {

    fetch("https://xkcd.now.sh/?comic=latest")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("something wrong")
            }
        })
        .then(content => {
            console.log(content);
            createImage(content);
        })
        .catch(err => console.log(err))
}

fetchComic();
function createImage(data) {
    let rootElement = document.getElementById("root");
    let imageElement = document.createElement("img");
    imageElement.src = data.img;
    rootElement.appendChild(imageElement);
}