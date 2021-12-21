export default interface productModel {
  id?: string;
  name: string;
  image: string;
  price: string;
  sold: number;
  inStock: number;
  discount: number;
  desc: string;
  numReviews: number;
  category?: string;
  brand?: string;
  review: Array<Type>;
}
interface Type {
  rateStar?: number;
  comment?: string;
  user?: string;
}
