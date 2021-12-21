
import React, { useState, useEffect} from 'react'

const url = 'https://restcountries.com/v3.1/all';

const Countries = () => {

    const [countries, setCountries] = useState([]);


    const fetchCountries = async() => {
        const response = await fetch(url)
        const result = await response.json()
        setCountries(result)
        console.log(result);
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    return <>
        {countries.map((country, index) => {

            const{ name, capital, region, languages, population, flags  } = country
            const { common } = name
            const { png } = flags

            const newLeng = languages || {}
            const languagesValues = Object.values(newLeng) || {};
            console.log(languagesValues);
            console.log(languagesValues.join(', '));
            const languagesString = languagesValues.join(', ')

            console.log("The current iteration is: " + index);
            console.log("The current element is: " + common);
            console.log("\n");


            return <div key={index}>
                <h4>{common}</h4>
                <p>{capital}</p>
                <p>{region}</p>
                <p>{languagesString}</p>
                <p>{population}</p>
                <img src={png} alt={common} />
            </div>

        })}
    </>

    
}

export default Countries
