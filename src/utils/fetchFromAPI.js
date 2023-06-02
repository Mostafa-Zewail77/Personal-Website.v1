import axios from "axios";

export const fetchFromAPI = async()=>{
    const response = await axios.get("https://api.github.com/users/mostafa-zewail77/repos");
    return response.data;
    
}

