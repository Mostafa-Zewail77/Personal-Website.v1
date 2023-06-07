import axios from "axios";

export const fetchFromAPI = async()=>{
    const response = await axios.get("https://api.github.com/users/mostafahassan-dev/repos");
    return response.data;
    
}

