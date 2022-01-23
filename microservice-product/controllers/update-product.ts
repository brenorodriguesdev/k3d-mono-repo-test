import { Product } from "../entities/product";
import { ProductRepository } from "../repositories/product-repository";
import { UpdateProductService } from "../services/update-product";

class UpdateProductController {
    constructor (private readonly updateProductService: UpdateProductService) {}
    async handle(product: Product): Promise<void> {
        if (!product.id) {
            throw new Error('The field id is required!')
        }

        if (!product.name) {
            throw new Error('The field name is required!')
        }
        this.updateProductService.update(product)
    }
}

const productRepository = new ProductRepository()
const updateProductService = new UpdateProductService(productRepository)
const updateProductController = new UpdateProductController(updateProductService)

export { updateProductController }