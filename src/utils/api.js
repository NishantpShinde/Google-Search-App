import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";


// {Create multiple accounts on the BASE_URL to avoid running out of api calls
// copy api_key and cx key from the url and paste it below in params}

// const params = {
//     key:"AIzaSyC9uLPEVx6txAZvD9nr4KCRLUvQOWW7vNo",
//     cx:"056d399e67b194a24"
// }


const params = {
    key:"AIzaSyAQ7qrMfyOWqN2jOQibUemqCnh-hd39GWE",
    cx:"d3e070fdf1ed842ef"
}

export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL, {
        params: {...params, ...payload},
    });
    return data;
};
