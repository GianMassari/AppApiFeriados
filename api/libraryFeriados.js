const axios=require("axios");

function obtenerFeriados(year,countryCode){
    return axios.get("https://date.nager.at/api/v2/publicholidays/"+ year +"/"+ countryCode);
}

module.exports=obtenerFeriados;
