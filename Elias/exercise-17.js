const countryPicker = () => {
    let countries = "Germany Spain Italy USA";
    countries = countries.split(" ");
    countryArr = countries[Math.floor(Math.random() * countries.length)];
    console.log(countryArr);
}

countryPicker();