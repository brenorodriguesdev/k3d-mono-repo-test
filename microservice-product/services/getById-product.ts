import { Product } from "../entities/product";
import { ProductRepository } from "../repositories/product-repository";

export class GetByIdProductService {
    constructor (private readonly productRepository: ProductRepository) {}
    async get(id: number): Promise<Product> {
        return await this.productRepository.getById(id)
    }
}