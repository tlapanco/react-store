import { useId, useState } from 'react'
import { useFilters } from '../hooks/useFilters.js'


export function Filters () {
    
  const { filters, setFilters } = useFilters({category: 'all', minPrice: 0})
  

  const [filtersMenu, setFiltersMenu] = useState(false)

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    // ⬇️ ESTO HUELE MAL
    // estamos pasando la función de actualizar estado
    // nativa de React a un componente hijo
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  const showFilters = () => {
    if(!filtersMenu) {
        document.getElementById('f-menu').classList.remove('hidden') 
        document.getElementById('f-menu').classList.toggle('flex')
    }else{
        document.getElementById('f-menu').classList.remove('flex') 
        document.getElementById('f-menu').classList.toggle('hidden')
    }

    setFiltersMenu(!filtersMenu)
  }

  return (
    <>
    <h2 onClick={showFilters} className='select-none cursor-pointer ml-4 w-fit bg-white rounded-full hover:shadow-md hover:shadow-m-blue px-3 py-1 sm:text-xl border-2 border-m-blue'>
        {!filtersMenu ? 'Mostrar ' : 'Ocultar ' } filtros
    </h2>
    <section id='f-menu' className='hidden  flex-col sm:flex-row p-5 sm:items-center gap-5 rounded-md max-w-full md:rounded-full bg-white  mx-5 '>

      <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center'>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
        className='max-w-[150px] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-m-purple hover:accent-s-blue'
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div className='flex flex-col sm:flex-row sm:gap-5 sm:items-center'>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select value={filters.category} className='w-fit cursor-pointer rounded-full border-2 hover:shadow-md hover:shadow-m-purple  text-gray-500 select-none p-1 border-m-purple focus:outline-none' id={categoryFilterId} onChange={handleChangeCategory}>
          <option className=' text-m-purple font-semibold' value='all'>Todas</option>
          <option className='text-m-purple font-semibold' value="men's clothing">Ropa de hombre</option>
          <option className='text-m-purple font-semibold' value='jewelery'>Joyería</option>
          <option className='text-m-purple font-semibold' value='electronics'>Electronica</option>
          <option className='text-m-purple font-semibold' value="women's clothing">Ropa de mujer</option>
        </select>
      </div>
      

    </section>
    </>

  )
}
