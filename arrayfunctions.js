// Fetch the data from the API
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // a. Get all the countries from Asia continent/region using Filter function
        const asiaCountries = data.filter(country => country.region === 'Asia');
        console.log("Countries in Asia:", asiaCountries);

        // b. Get all the countries with a population of less than 2 lakhs using Filter function
        const countriesWithLowPopulation = data.filter(country => country.population < 200000);
        console.log("Countries with population less than 2 lakhs:", countriesWithLowPopulation);

        // c. Print the following details name, capital, flag using forEach function
        data.forEach(country => {
            console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags[0]}`);
        });

        // d. Print the total population of countries using reduce function
        const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);
        console.log("Total population of countries:", totalPopulation);

        // e. Print the country which uses US Dollars as currency
        const usDollarCountries = data.filter(country => country.currencies && country.currencies.USD);
        console.log("Countries using US Dollars as currency:", usDollarCountries);
    })
    .catch(error => console.error(error));
