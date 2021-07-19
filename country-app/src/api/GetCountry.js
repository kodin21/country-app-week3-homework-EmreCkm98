import {useState,useEffect} from "react";
import axios from "axios";

const GetCountry = () => {
    const [countries,setCountries]=useState([]);

    useEffect(()=>{
        axios.get("https://restcountries.eu/rest/v2/all")
        .then((response) => {
            setCountries(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });        
    },[]);
  
  return {countries};
};

export default GetCountry;
