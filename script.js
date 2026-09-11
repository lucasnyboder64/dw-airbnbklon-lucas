function loadAirBnB(path) {
    fetch(path, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(JSON.stringify(error)));
}

loadAirBnB("data/1.json");