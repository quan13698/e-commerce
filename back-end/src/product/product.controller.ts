import { Body, Controller, Get, Post } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { creatProductDTO } from './dto/create-product.dto';
import { searchProductDTO } from './dto/searchProduct.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(
        private productService: ProductService
    ){}

    @Get('/list-product')
    listAllProduct() {
        return this.productService.listAll()
    }

    @Post('/create-product')
    create(@Body() creatProductDTO: creatProductDTO) {
        return this.productService.create(creatProductDTO)
    }

    @Get()
    getProductByQuering(@Query() filterDTO: searchProductDTO) {
        if(Object.keys(filterDTO).length) {
            return this.productService.getProductByQuering(filterDTO)
        } else {
            return this.productService.listAll()
        }
    }
}
