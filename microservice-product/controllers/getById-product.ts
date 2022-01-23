import { Product } from "../entities/product";
import { ProductRepository } from "../repositories/product-repository";
import { GetByIdProductService } from "../services/getById-product";

class GetByIdProductController {
    constructor (private readonly getByIdProductService: GetByIdProductService) {}
    async handle(id: number): Promise<Product> {
        if (!id) {
            throw new Error('The field id is required!')
        }
        return await this.getByIdProductService.get(id)
    }
}

const productRepository = new ProductRepository()
const getByIdProductService = new GetByIdProductService(productRepository)
const getByIdProductController = new GetByIdProductController(getByIdProductService)

export { getByIdProductController }