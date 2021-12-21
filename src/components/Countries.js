
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

    </>

    
}

export default Countries
