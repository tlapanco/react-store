import { getProducts, getCategories } from '../services/products.js'

import { useState, useEffect } from 'react';

export const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ data, setData ] = useState({products: [], categories: []})
  useEffect(() => {    
    const fetchData = async () => {      
      try {
        const products = await getProducts();
        const categories = await getCategories();
        setData({products, categories})
      } catch (error) {
        setError(error.message);
      } finally {        
        setLoading(false);
      }
    }
    fetchData()   
  }, [])

  return { products: data.products, loading, error, categories: data.categories };

}