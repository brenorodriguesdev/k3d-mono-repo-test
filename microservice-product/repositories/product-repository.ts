import { getRepository } from "typeorm";
import { Product } from "../entities/product";

export class ProductRepository {
    async create(product: Product): Promise<void> {
        const productRepository = getRepository(Product)
        await productRepository.save(product)
    }

    async update(product: Product): Promise<void> {
        const productRepository = getRepository(Product)
        const { id } = product
        delete product.id
        await productRepository.update({ id }, product)
    }

    async deleteById(id: number): Promise<void> {
        const productRepository = getRepository(Product)
        await productRepository.delete(id)
    }

    async getAll(): Promise<Product[]> {
        const productRepository = getRepository(Product)
        return await productRepository.find()
    }

    async getById(id: number): Promise<Product> {
        const productRepository = getRepository(Product)
        return await productRepository.findOne(id)
    }
}