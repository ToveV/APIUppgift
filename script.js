const keyAPI = "d26c38b4466957751e1ac3b6c50a3193";
let url = "https://api.documenu.com/v2/restaurants/search/geo?";

let lat; 
let lon;

const denver = document.getElementById("denver");
const lasVegas = document.getElementById("lasVegas");
const houston = document.getElementById("houston");

const cities = document.getElementById("cities")
cities.addEventListener("click", (e) => {
    let selectedCity = e.target;
    if(selectedCity.id === "denver"){
        console.log("denver")
        lat = "39.742043";
        lon = "-104.991531";
    }
    else if(selectedCity.id === "lasVegas"){
        console.log("lasVegas")
        lat = "36.114647";
        lon = "-115.172813";
    }
    else{
        console.log("houston")
        lat = "29.749907";
        lon = "-95.358421";
    }
});

const searchButton = document.getElementById("searchButton")
const results = document.getElementById("results");
searchButton.addEventListener("click", () => {
    url += `lat=${lat}&lon=${lon}&distance=10&size=25&page=1`;
    fetch(url, {
            headers: {
                "x-api-key": keyAPI
            }
        }).then((response) => response.json()).then((data) => {

            console.log(data, data.data[0].restaurant_name);

            for(let i = 0; i < data.data.length; i++){
                let restaurant = document.createElement("div");
                restaurant.innerHTML = `Name: ${data.data[i].restaurant_name} Address: ${data.data[i].address.street}`;

                results.appendChild(restaurant);
            }
})
});