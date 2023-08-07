import axios from "axios";

export async function fetchData (){
    const ListProduct = await axios.get("https://fakestoreapi.com/products")
    return ListProduct;
}