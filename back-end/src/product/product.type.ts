import { Document } from 'mongoose';

export interface Product extends Document {
  name: String;
  img: String;
  description: String;
  brand: String;
  price: String;
  color: String;
}
