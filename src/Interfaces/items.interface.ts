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
  name: string;
  price: number;
}

export interface Store {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export interface Category {
  id: number;
  name: string;
  imageLink: string;
  imgAlt: string;
  otherName: string;
  qty: number;
  pieces: number;
  serving: number;
  price: number;
}
