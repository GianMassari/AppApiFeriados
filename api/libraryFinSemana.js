const axios=require("axios");

function obtenerFinSemana(year,countryCode){
    return axios.get("https://date.nager.at/api/v2/LongWeekend/"+ year +"/"+ countryCode);
}

module.exports=obtenerFinSemana;
