"use strict"

var country1 = {
    name: "Ispanija",
    area: 505990,
    population: 47450795
}
var country2 = {
    name: "Prancūzija",
    area: 643801,
    population: 67413000
}
var country3 = {
    name: "Vokietija",
    area: 357022,
    population: 83190556
}
var country4 = {
    name: "Lenkija",
    area: 312696,
    population: 38179800
}
var country5 = {
    name: "Lietuva",
    area: 65300,
    population: 2795680
}

var countries = [
    country1, country2, country3, country4, country5
]


for(var country of countries){
    console.log(`Šalis: ${country.name}, joje gyvena ${Number(country.population/1000000).toFixed(2)} mln. gyventojų.`)
    console.log(`Valstybės plotas: ${Number(country.area).toFixed(2)} km², plotas tenkantis vienam gyventojui: ${Number(country.area*1000000/country.population).toFixed(2)} m²`)
}
function showCountries(){
    for(var country of countries){
        console.log(`Šalis: ${country.name}, joje gyvena ${Number(country.population/1000000).toFixed(2)} mln. gyventojų.`)
        console.log(`Valstybės plotas: ${Number(country.area).toFixed(2)} km², plotas tenkantis vienam gyventojui: ${Number(country.area*1000000/country.population).toFixed(2)} m²`)
    }
}


console.log("Papildoma užduotis")

showCountries()
