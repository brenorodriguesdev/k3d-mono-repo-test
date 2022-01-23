import { Product } from "../entities/product";
import { ProductRepository } from "../repositories/product-repository";
import { GetAllProductService } from "../services/getAll-product";

class GetAllProductController {
    constructor (private readonly getAllProductService: GetAllProductService) {}
    async handle(): Promise<Product[]> {
        return await this.getAllProductService.get()
    }
}

const productRepository = new ProductRepository()
const getAllProductService = new GetAllProductService(productRepository)
const getAllProductController = new GetAllProductController(getAllProductService)

export { getAllProductController }