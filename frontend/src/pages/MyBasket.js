import React from 'react'
import { useSelector } from 'react-redux'
import Breadcrumb from '../components/Breadcrumb'
import ProductCard from './components/ProductCard'
import './styles/Products.css'

const breadcrumb = [{name: 'Anasayfa', path: '/'}, {name: 'Sepetim', path: '/my-basket'}]

export default function MyBasket() {
  const basket = useSelector((state) => state.cart.cart)

  const Products = () => (
    <div className='products'>
      { basket.map(product => <ProductCard product={product} key={product._id}/>) }
    </div>
  )

  const EmptyBasket = () => <h1>Sepetiniz boş.</h1>

  return (
    <>
      <Breadcrumb data={breadcrumb}/>

      { 
        basket.length ?
        <Products /> :
        <EmptyBasket /> 
      }
    </>
  )
}
