export interface IProduct {
  id: number;
  title: string;
  description: string;
  sizes?: ISize[];
  stock?: number;
  punctuation: number;
  price: {
    before?: number;
    current: number;
  };
  relatedProducts: number[];
}

export interface ISize {
  size: string;
  stock: number;
}
