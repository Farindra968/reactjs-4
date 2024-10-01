import axios from "axios";
import config from "../config/configAPI";




const getProduct = async() => {
  const response = await axios
    .get(`${config.baseapiurl}/api/products`)
    return response;
    
};

const getProductByid = async(id) => {
    const response = await axios.get(`${config.baseapiurl}/api/products/${id}`)
    return response;
      
  };

export { getProduct, getProductByid };
