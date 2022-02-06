// packages
import React from 'react'
import useFetchCategories from 'api/fetchProducts/useFetchCategories'
import CardProduct from 'components/CardProduct/CardProduct'
// styles
import styles from './stylesListProducts'

/** список продукции */
const ListProducts: React.FC = () => {
  const { data } = useFetchCategories()

  return (
    <div className='wrapper mt-64'>
      {data?.map((category, key) => (
        <div className='mb-64' key={key}>
          <h2 className={styles.title}>{category.title}</h2>
          <ul className='flex flex-wrap -mx-gutter'>
            {category.products?.map((item, key) => (
              <li key={key} className='w-1/3 p-gutter sm:w-full'>
                <CardProduct {...item} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default React.memo(ListProducts)
