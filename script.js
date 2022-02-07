const img = document.getElementsByTagName("img")[0];
const button = document.getElementsByTagName("button")[0];
const input = document.getElementsByTagName("input")[0];
const nameOfCountry = document.getElementsByClassName("name-country")[0];
const capital = document.getElementsByClassName("capital")[0];
const population = document.getElementsByClassName("population")[0];
const area = document.getElementsByClassName("area")[0];
const language = document.getElementsByClassName("languages")[0];

button.addEventListener("click", function () {
  fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      getData(data);
      console.log(data);
    });

  function getData(data) {
    img.src = data.map((item) => item.flags.png);
    nameOfCountry.innerHTML = data.map((item) => item.name.official);
    capital.innerHTML = "Capital | " + data.map((item) => item.capital[0]);
    population.innerHTML =
      "Population | " + data.map((item) => item.population);
    area.innerHTML =
      "Area | " + data.map((item) => item.area) + "  km <sup> 2 </sup>";
    language.innerHTML =
      "Language | " + data.map((item) => Object.values(item.languages)[0]);
  }
});
