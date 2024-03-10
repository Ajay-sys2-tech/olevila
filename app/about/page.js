import React from 'react';
import About from '../../components/About';
import getProducts from '../../api/conn'

const page = async ()=>{
    const products = await  getProducts();
    
    const data = await products.json();

    console.log(data);

    return(
        <><About/></>
    )

}
export default page;