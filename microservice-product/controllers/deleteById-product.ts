import { ProductRepository } from "../repositories/product-repository";
import { DeleteByIdProductService } from "../services/deleteById-product";

class DeleteByIdProductController {
    constructor (private readonly deleteByIdProductService: DeleteByIdProductService) {}
    async handle(id: number): Promise<void> {
        if (!id) {
            throw new Error('The field id is required!')
        }
        this.deleteByIdProductService.delete(id)
    }
}

const productRepository = new ProductRepository()
const deleteByIdProductService = new DeleteByIdProductService(productRepository)
const deleteByIdProductController = new DeleteByIdProductController(deleteByIdProductService)

export { deleteByIdProductController }