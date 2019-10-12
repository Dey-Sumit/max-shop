export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem =>
    cartItem.id === cartItemToAdd.id);

  //return a new version of array(of objects which contains a quantity prop )
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id ? {
        ...cartItem,
        quantity: cartItem.quantity + 1
      } :
      cartItem
    )
  }
  return [...cartItems, {
    ...cartItemToAdd,
    quantity: 1
  }]
}