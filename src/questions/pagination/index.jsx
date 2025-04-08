
// always play with the response data length in the api 
// check the length the list in the array of obejects in the json file keep that in  mind 

import React, { useEffect, useState } from 'react'
import pagination from './pagination';

const index = () => {
const [products, setProducts] = useState([]);
const [total , setTotal] = useState(0)
cosnt[page , setPage] = useState(1)




useEffect(() => {
fetchResponse()
},[page])

const fetchResponse = async() => {
    const response = await fetch(`ask the interviewer what changes should i make in the url and change the quey by ?limit=10&skip=${(page - 1) * 10}`)
    const responseData = await response.json();
    if(response && responseData.products){
        setProducts(responseData.products)
        setTotal(responseData.total)
        console.log("products", responseData)
    }

}

  return (
    <div>
      <pagination products={products} total={total} page= {page} setPage= {setPage} />
    </div>
  )
}

export default index
