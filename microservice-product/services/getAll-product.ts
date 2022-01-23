import { Product } from "../entities/product";
import { ProductRepository } from "../repositories/product-repository";

export class GetAllProductService {
    constructor (private readonly productRepository: ProductRepository) {}
    async get(): Promise<Product[]> {
        return await this.productRepository.getAll()
    }
}