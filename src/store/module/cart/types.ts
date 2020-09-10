export interface IProduct {
  id: number
  title: string
  price: number
}

export interface ICartItem {
  product: Object
  quantity: number
}
export interface ICartState {
  items: ICartItem[]
}
