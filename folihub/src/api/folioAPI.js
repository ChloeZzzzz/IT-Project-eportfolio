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

export async function savePage(data) {
    const endpoint = BASE_FOLIO + '/savePage';
    var res = await axios.post(endpoint, data, {crossdomain: true}).then((response) => {
        console.log(response);
        return response;
    })
    return res;
}

export async function getFolio(data) {
    const endpoint = BASE_FOLIO + '/getEportfolio';
    var res = await axios.post(endpoint, data, {crossdomain: true}).then((response) => {
        console.log(response);
        return response.data
    })
}

export async function renameFolio(data) {
    const endpoint = BASE_FOLIO + '/renameFolio';
    await axios.post(endpoint, data, {crossdomain: true}).then((response) => {
        console.log(response);
        return response.data;
    })
}