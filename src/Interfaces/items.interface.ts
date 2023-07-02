export interface Item {
  id: number;
  imageLink: string;
  heading: string;
  quantity: string;
  discountedPrice?: string;
  price: string;
  discount?: string;
}

export interface CartItem {
  id: number;
  qtyInCart: number;
}