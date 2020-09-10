import { IProduct } from "./types"

export const addProductToCart = (produtct: IProduct) => {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      produtct
    }
  }
}
