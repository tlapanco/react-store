import { ProductCard } from './ProductCard';
import { useCart } from '../hooks/useCart';
import { Filters } from './Filters';
import Reveal from './Reveal';
import { Suspense } from 'react';
import Loading from './Loading'


export const Products = ({products, categories}) => {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
      return cart.some(item => item.id === product.id)
    }
    
    return (
        <Suspense fallback={<Loading />}>
        <Reveal>
        <main className="w-full mt-5 flex flex-col gap-5 justify-center">
            <Filters categories={categories} />
            <ul className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-5 pb-5 gap-5'>
                {products.map(product => {
                    const isProductInCart = checkProductInCart(product)

                    return (
                        <ProductCard 
                        product={product} 
                        key={product.id} 
                        isProductInCart={isProductInCart} 
                        removeFromCart={removeFromCart}  
                        addToCart={addToCart} />
                    )
                })}
            </ul>
        </main>
        </Reveal>
        </Suspense>
    )
}