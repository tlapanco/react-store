import {products as initialProducts }from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import {CartProvider} from './context/cart'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import CartDetail from './components/CartDetail'
import Footer from './components/Footer'


function App() { 
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)
  return (
    <CartProvider >
      <Header />  
      <Routes>
        <Route index element={<Products products={filteredProducts} />} />
        <Route path='/acerca-de' element={<Hero />} />
        <Route path='/product/:id' element={<ProductDetail products={filteredProducts} />}/>
        <Route path='/carrito' element={<CartDetail />} />
        
      </Routes>
      <Footer />    
    </CartProvider>
  )
}

export default App
