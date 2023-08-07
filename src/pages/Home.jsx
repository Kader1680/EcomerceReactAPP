import React, { useEffect, useState } from 'react'
import Banner from "../components/Banner"
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'
const Home  = () => {

  const fetchData = useLoaderData()
  // console.log(fetchData)
  const [product, setproduct] = useState([]);
  useEffect(() => {
    setproduct(fetchData.data)
  }, [fetchData]);
  return (
    <div>
        <Banner/>
        <Products product = {product} />
    </div>

  )
}

export default Home