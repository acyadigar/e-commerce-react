import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import './styles/ProductCard.css'

export default function ProductCard({ product }) {
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  const isAlreadyAdded = useMemo(() => {
    return cart.find(item => item._id === product._id) ? true : false
  }, [cart, product._id])
  
  const _addToCart = () => {
    dispatch(addToCart(product))
  }

  const _removeFromCart = () => {
    dispatch(removeFromCart(product))
  }

  return (
    <div className="product-card">
      <Link to={product._id}>
        <div className="product-image">
          <img src="https://picsum.photos/150/200" alt="" />
        </div>
      </Link>
      <div className="product-info">
        <div className="info-head">
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <p>{product.price}₺</p>
        </div>
        <div className="info-footer">
          { isAlreadyAdded ? 
            <Button variant="danger" onClick={_removeFromCart}>Sepetten Çıkar</Button> :
            <Button variant="success" onClick={_addToCart}>Sepete Ekle</Button>
          }
        </div>
      </div>
    </div>
  );
}
