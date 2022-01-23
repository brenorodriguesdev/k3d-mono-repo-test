import { Product } from "../entities/product";
import { ProductRepository } from "../repositories/product-repository";

export class CreateProductService {
    constructor (private readonly productRepository: ProductRepository) {}
    async create(product: Product): Promise<void> {
        this.productRepository.create(product)
    }
}