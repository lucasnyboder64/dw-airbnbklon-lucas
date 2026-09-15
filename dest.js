
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const text = document.createElement("p");
text.id = "destination_text";
const id = params.get("id");
const big_image = document.createElement("img");
big_image.id = "image";
const sted = document.createElement("h1");
sted.id = "destination";
const title = document.createElement("p");
title.id = "title";
const subtitle = document.createElement("p");
subtitle.id = "subtitle";
const aboutText = document.createElement("p");
aboutText.id = "title";
const facilities = document.createElement("ul");
facilities.id = "facilities";
const container = document.createElement("div");
container.id = "container";
const wrapper = document.createElement("div");
wrapper.id = "wrapper";
const facilities_text = document.createElement("p");
facilities_text.id = "facilities_text";
//   alert(params.get("id"));

/*
            "id": 5,
            "image": "pigraitaly.jpg",
            "destination": "Italy",
            "title": "Full home/apartment in Pigra, Italien",
            "subtitle": "Beatiful spot close to the Como Lake",
            "text": "Navona romantic Suite is bright apartment of 60 mq, on the third floor of an important historical building of 1400, with privileged views of Saint Peter's dome and overlooking the basilica of San Giovanni dei Fio(SENSITIVE CONTENTS HIDDEN) with frescoes by Michelangelo and Raphael. The apartment has a double bedroom with charming ceiling with original beams, panoramic living room with fireplace and sofa bed for two people; equipped kitchen, bathroom with shower and window. Comfortable and equipped with every comfort, Navona romantic suite is the ideal location for your stay in the heart of ancient Rome. At 30 mt there are the bus stop of the main bus routes to all directions. Walking distance to the embassies of France and Spain",
            "facilities": [
                "Free parking on the premises",
                "Kitchen",
                "Wi-Fi",
                "Shampoo"
            ]
*/

if (id != null) {
    fetch("data/" + id + ".json", {
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            big_image.setAttribute("src", "img/" + data.image);
            sted.textContent = data.destination;
            title.textContent = data.title;
            subtitle.textContent = data.subtitle;
            aboutText.textContent = data.text;
            facilities_text.textContent = "Facilities";
            data.facilities.forEach(element => {
                facilities.innerHTML += "<li>" + element + "</li>";
            });


            container.append(sted, title, subtitle, aboutText, facilities_text, facilities);
            wrapper.append(big_image, container);
            document.body.append(wrapper);
        })
        .catch(error => console.error(error));
}