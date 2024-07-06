import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";


// {Create multiple accounts on the BASE_URL to avoid running out of api calls
// copy api_key and cx key from the url and paste it below in params}

// const params = {
//    
// }


const params = {
    
}

export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL, {
        params: {...params, ...payload},
    });
    return data;
};
