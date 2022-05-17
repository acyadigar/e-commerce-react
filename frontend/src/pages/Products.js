import { useQuery } from 'react-query'
import { fetchProducts } from '../store/productSlice'
import ProductCard from './components/ProductCard'
import Breadcrumb from '../components/Breadcrumb'
import './styles/Products.css'

const breadcrumb = [{name: 'Anasayfa', path: '/'}, {name: 'Ürünler', path: '/products'}]

export default function Products() {
  const { data, isLoading, isError } = useQuery('products', fetchProducts, {refetchOnMount: true})

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Ürün getirme başarısız oldu.</h1>

  return (
    <>
      <Breadcrumb data={breadcrumb}/>
      <div className="products">
        { data.map((product) => <ProductCard product={product} key={product._id}/>)}
      </div>
    </>
  );
}
