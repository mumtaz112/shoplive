import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
export default function Products() {
    
    const {category} = useParams(); 
    
    useEffect(() => {
        const getItems = async () => {
            const result = await axios.get('https://dummyjson.com/products/categories');

            const allItems = result.data.entries;
            const categoryItems = allItems.filter(item => item.Category === category);
            setItems(categoryItems)
        }
        getItems()
    }, [category])
  
  }