import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  public async createProduct() {
    return 'Product created';
  }

  @Get()
  public async findAllProducts() {
    return 'All products';
  }

  @Get(':id')
  public async findProductById(@Param('id') id: string) {
    return `Product with id: ${id}`;
  }

  @Delete(':id')
  public async deleteProduct(@Param('id') id: string) {
    return `Product with id: ${id} deleted`;
  }
  @Patch(':id')
  public async updateProduct(@Param('id') id: string, @Body() body: any) {
    return `Product with id: ${body.id} updated`;
  }
}
