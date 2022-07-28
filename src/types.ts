export interface Item {
  name: string;
  price: number;
  id: number;
  category: string;
}

export interface CartItem {
  item: Item;
  quantity: number;
}

export interface User {
  previousPurchase: number[];
}
