import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PRODUCT_SERVICE } from 'src/config';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  public async createProduct() {
    return 'Product created';
  }

  @Get()
  public async findAllProducts(@Query() paginationDto: PaginationDto) {
    //La diferencia entre send y emit es que send espera una respuesta y emit no
    return this.productsClient.send({ cmd: 'findAll' }, paginationDto);
  }

  @Get(':id')
  public async findProductById(@Param('id') id: string) {
    return this.productsClient.send({ cmd: 'findOne' }, { id }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );

    // try {
    //   const product = await firstValueFrom(
    //     this.productsClient.send({ cmd: 'findOne' }, { id }),
    //   );

    //   return product;
    // } catch (error) {
    //   throw new RpcException(error);
    // }
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
