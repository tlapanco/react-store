import { API_URL } from '../constants.js'

export const getProducts = async () => {


  try {
    const response = await fetch(API_URL + 'productos')
    const json = await response.json()

    const products = json
    

    return products?.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      categoryID: product.category_id,
      images: product.product_images,
    }))
  } catch (e) {
    throw new Error('Error getting products')
  }
}

export const getCategories = async () => {


  try {
    const response = await fetch(API_URL + 'categorias')
    const json = await response.json()

    const categories = json
    

    return categories?.map(category => ({
      id: category.id,
      name: category.name,
      
    }))
  } catch (e) {
    throw new Error('Error getting categories')
  }
}
