export interface Item {
  name: string;
  price: number;
  id: number;
  category: string;
}

export interface User {
  previousPurchase: number[];
}
