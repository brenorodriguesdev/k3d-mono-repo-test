import { Product } from "../entities/product";
import { ProductRepository } from "../repositories/product-repository";
import { CreateProductService } from "../services/create-product";

class CreateProductController {
    constructor (private readonly createProductService: CreateProductService) {}
    async handle(product: Product): Promise<void> {
        if (!product.name) {
            throw new Error('The field name is required!')
        }
        this.createProductService.create(product)
    }
}

const productRepository = new ProductRepository()
const createProductService = new CreateProductService(productRepository)
const createProductController = new CreateProductController(createProductService)

export { createProductController }