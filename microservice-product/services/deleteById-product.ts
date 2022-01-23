import { ProductRepository } from "../repositories/product-repository";

export class DeleteByIdProductService {
    constructor (private readonly productRepository: ProductRepository) {}
    async delete(id: number): Promise<void> {
        this.productRepository.deleteById(id)
    }
}