import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { creatProductDTO } from './dto/create-product.dto';
import { searchProductDTO } from './dto/searchProduct.dto';
import { Product } from './product.type';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async listAll(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async create(productDto: creatProductDTO) {
    const product = await this.productModel.create(productDto);
    await product.save();
    return product;
  }

  async getProductByQuering(filterDTO: searchProductDTO) {
    let { search, brand } = filterDTO;

    let products = await this.listAll();
    if (brand) {
      products = products.filter((e: any) => e.brand === brand);
    }
    if (search) {
      products = products.filter(
        e => e.name.includes(search) || e.color.includes(search),
      );
    }

    return products;
  }
}
