import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Audio } from 'react-loader-spinner'
function AllProduct() {
  const [loading,setLoading]=useState(false)
const [myData, setMyData] = useState([]);
const [isError, setIsError] = useState("");
const [search,setSearch]=useState("");
// const searchHandle= async (event)=>{
//   let key=event.target.value;
//   let result=await fetch(`https://dummyjson.com/products/search?q=/${key}`);
//   result=await result.json();
//   if(result)
//   {
//    setMyData(result);
//   }
//  }
useEffect(() => {
  axios
    .get("https://dummyjson.com/products")
    .then((response) => setMyData(response.data.products))
    .catch((error) => setIsError(error.message));
}, []);
  return (
    <>
   { loading ?(<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>):(
   <div className='grid-blk'>       
   <div className='grid text-center mt-100'>      
    <div className='container'>
    <div className="row">
      <input type='search' name='src' value={search} className='search-product-box form-control' placeholder='Search Products' onChange={(e=>{setSearch(e.target.value)})}/>
     {

     myData.filter((row)=>{
      if(search==""){
    
    return row;
      }
      else if(row.title.toLowerCase().includes(search.toLowerCase())){
       return row;
    
      }
                
     })
     .map((row,i)=>{
      return (
        <div className='col-md-3'>
        <div className=' grid text-center shadow-lg' key={i}>
        <img className='w-100 img-fluid' src={row.thumbnail}></img>
        <h2>{row.title}</h2>
        <h6>{row.price}</h6>
        </div>
        </div>
    
      )
    })

     }
   

     
     {/* {myData.map((products) => {
         
         const {id,thumbnail,title,price} = products;
         return (
           <div key={id} className='col-md-3'>
             <img className='w-100 img-fluid' src={thumbnail}></img>
             <h2>{title}</h2>
            <h6>{price}</h6>
           </div>
           
           )}
          )}; */}
  </div>
  </div>
  </div> 
  </div>)}
          
  </>
)}

export default AllProduct