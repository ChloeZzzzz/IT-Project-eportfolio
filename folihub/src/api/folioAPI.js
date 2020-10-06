const BASE_FOLIO = "https://folihub-api.herokuapp.com/eportfolio";
const axios = require('axios');

export async function getEportfolios() {
    const endpoint = BASE_FOLIO + '/getEportfolios';
    var res = await axios.get(endpoint, localStorage.getItem("email"), {crossdomain: true}).then((response) => {

        console.log(response);
        console.log(response.data);
        return response.data;
    });
    return res;
}

export async function createEportfolio(data) {
    const endpoint = BASE_FOLIO + '/createEportfolio';
    await axios.post(endpoint, data, {crossdomain: true}).then((response) => {
        return response.data;
    })
}