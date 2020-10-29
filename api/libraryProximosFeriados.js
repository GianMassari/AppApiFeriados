const axios=require("axios");

function obtenerProximosFeriados(countryCode){
    return axios.get("https://date.nager.at/api/v2/NextPublicHolidays/" + countryCode);
}



module.exports=obtenerProximosFeriados;

