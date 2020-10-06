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
    return res;
}