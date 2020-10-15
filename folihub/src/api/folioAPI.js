const BASE_FOLIO = "https://folihub-api.herokuapp.com/eportfolio";
const axios = require('axios');

export async function getEportfolios() {
    const endpoint = BASE_FOLIO + `/getEportfolios/${localStorage.getItem("email")}`;
    var data = {"email": localStorage.getItem("email")};
    console.log(data);
    var res = await axios.get(endpoint, data, {crossdomain: true}).then((response) => {

        console.log(response);
        console.log(response.data);
        return response.data;
    });
    return res;
}

export async function createEportfolio(data) {
    const endpoint = BASE_FOLIO + '/createEportfolio';
    var res = await axios.post(endpoint, data, {crossdomain: true}).then((response) => {
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
        console.log("get folio api: ", response.data);
        return response.data;
    })
    return res;
}

export async function renameFolio(data) {
    const endpoint = BASE_FOLIO + '/renameFolio';
    await axios.post(endpoint, data, {crossdomain: true}).then((response) => {
        console.log(response);
        return response.data;
    })
}

export async function createPage(data) {
    const endpoint = BASE_FOLIO + '/createPage';
    await axios.post(endpoint, data, {crossdomain: true}).then((response) => {
        console.log(response);
        return response.data;
    })
}

export async function getPage(data) {
    const endpoint = BASE_FOLIO + '/getPage';
    console.log("get-page api:  ", data);
    var res = await axios.post(endpoint, data, {crossdomain: true}).then((response) => {
        return response.data;
    })
    if (res.length == 0) {
        return "empty page";
    } else {
        return res;
    }
}