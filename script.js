let img = document.getElementsByTagName("img")[0];
let nameOfCountry = document.getElementsByClassName("name-country")[0];
let capital = document.getElementsByClassName("capital")[0];
let population = document.getElementsByClassName("population")[0];
let area = document.getElementsByClassName("area")[0];
let language = document.getElementsByClassName("languages")[0];

let searchCountry = function (nameOfCountry) {
  fetch(`https://restcountries.com/v3.1/name/${nameOfCountry}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      getData(data);
    });

  function getData(data) {
    img.src = data.map((item) => item.flags.png);
    console.log(data);
    nameOfCountry.innerHTML = data.map((item) => item.name.official);
    capital.innerHTML += " " + data.map((item) => item.capital[0]);
    population.innerHTML += " " + data.map((item) => item.population);
    area.innerHTML += " " + data.map((item) => item.area);
    language.innerHTML +=
      " " + data.map((item) => Object.values(item.languages)[0]);
  }
};
