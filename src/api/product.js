import axios from "axios";

const baseAPIUrl = "https://nodejs-20240519.vercel.app";

const getproduct = async() => {
  const response = await axios
    .get(`${baseAPIUrl}/api/products`)
    return response;
    


};

export { getproduct };
