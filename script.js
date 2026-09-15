let airbnbs = document.createElement("section");
airbnbs.id = "airbnbs";

let titleDiv = document.createElement("div");
titleDiv.id = "title_row";
let text = document.createElement("h1");
text.id = "title";
text.textContent = "Apartments for rent";
titleDiv.append(text);
document.body.append(titleDiv);

// index.html
function genererCard(id) {
    fetch("data/" + id + ".json", {
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {

            let airbnb_card = document.createElement("div");
            airbnb_card.classList.add("airbnb_card");
            let thumbnail = document.createElement("img");
            thumbnail.classList.add("thumbnail");
            thumbnail.setAttribute("src", "img/" + data.image);
            let lower_panel = document.createElement("div");
            lower_panel.classList.add("lower_panel");
            let heart = document.createElement("img");
            heart.setAttribute("src", "img/dark_heart.svg");
            heart.classList.add("heart");
            let link = document.createElement("a");
            link.href = "destination.html?id=" + id;
            link.textContent = "MORE";
            link.classList.add("more");

            lower_panel.append(heart, link);

            airbnb_card.append(thumbnail);
            airbnb_card.append(lower_panel);
            airbnbs.append(airbnb_card);
            heart.addEventListener("click", addToFavorite);
            document.body.append(airbnbs);
            //console.log(airbnbs);

        })
        .catch(error => console.error(error));
}



function addToFavorite(event) {
    let heart = event.target;
    heart.setAttribute("src", "img/heart.svg");
    
}

genererCard(1);
genererCard(2);
genererCard(3);
genererCard(4);
genererCard(5);
genererCard(6);
genererCard(7);
genererCard(8);
