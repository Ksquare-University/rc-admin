import axios from "axios"

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
}

export const client = axios.create ({

    baseURL: "http://localhost:3010",
    
})

client.interceptors.response.use (response => response.data);

export const setAuthorizationHeader = (token: string) => (client.defaults.headers.common['Authorization'] = `Bearer ${token}`);
export const removeAuthorizationHeader = () => {
    delete client.defaults.headers.common['Authorization'];
};
