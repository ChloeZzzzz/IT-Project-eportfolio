const BASE_FOLIO = "https://folihub-api.herokuapp.com/eportfolio";
const axios = require('axios');

export async function getEportfolios(data) {
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
    console.log(data);
    var res = await axios.post(endpoint, data, {crossdomain: true}).then((response) => {
        console.log(response);
        console.log(response.data);
        console.log(response.data[0].FolioName);
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
    var res = await axios.post(endpoint, data, {crossdomain: true}).then((response) => {
        console.log("..getpage..");
        console.log(response);
        return response.data;
    })
    console.log(res);
}