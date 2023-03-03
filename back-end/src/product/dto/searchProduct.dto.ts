import { Product_Brand } from "../product.schema";

export interface searchProductDTO {
  search: string;
  brand: Product_Brand;
}
