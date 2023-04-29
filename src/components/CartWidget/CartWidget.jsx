import './CartWidget.css'

const CartWidget = () => {
  const imgcarrito = "https://img.freepik.com/vector-premium/icono-carrito-compras-rapido_414847-513.jpg?w=2000"
  return (
    <div>
      <img className='imgcarrito' src={imgcarrito} alt="Carrito" />
      <strong> 4 </strong>
    </div>
  )
}

export default CartWidget
