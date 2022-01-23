import { Product } from "../entities/product";
import { ProductRepository } from "../repositories/product-repository";

export class UpdateProductService {
    constructor (private readonly productRepository: ProductRepository) {}
    async update(product: Product): Promise<void> {
        this.productRepository.update(product)
    }
}