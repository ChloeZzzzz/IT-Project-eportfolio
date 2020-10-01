const BASE_FOLIO = "https://folihub-api.herokuapp.com/eportfolio";
const axios = require('axios');

export async function getEportfolios() {
    const endpoint = BASE_FOLIO + '/getEportfolios';
    await axios.get(endpoint, {crossdomain: true}).then((response) => {
        return response.data;
    });
}

export async function createEportfolio(data) {
    const endpoint = BASE_FOLIO + '/createEportfolio';
    await axios.post(endpoint, data, {crossdomain: true}).then((response) => {
        return response.data;
    })
}