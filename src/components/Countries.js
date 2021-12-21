import React, { useState, useEffect} from 'react'
import * as ReactBootStrap from 'react-bootstrap'

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

    return (
        <div>
            <ReactBootStrap.Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Region</th>
                        <th>Languages</th>
                        <th>Population</th>
                        <th>Flags</th>
                    </tr>
                    </thead>
                    <tbody>

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


                        return( 
                           
                                
                        <tr key={index}>
                        <td>{common}</td>
                        <td>{capital}</td>
                        <td>{region}</td>
                        <td>{languagesString}</td>
                        <td>{population}</td>
                        <td><img style={{height: '24px'}}  src={png} alt={common} /></td>
                        </tr>

                            
                        )

                    })}

                    </tbody>
            </ReactBootStrap.Table>

    </div>
    )

    
}

export default Countries
