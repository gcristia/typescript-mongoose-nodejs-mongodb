import { getModelForClass, prop } from '@typegoose/typegoose'
import { Comment } from './Comment'
import { v4 as uuidv4 } from 'uuid'

class Product {
    @prop({ type: String, required: true, trim: true })
    name: string

    @prop({ required: true, default: () => uuidv4() })
    sku: string

    @prop({ type: Number, default: 0 })
    price: number

    @prop({ type: String, lowercase: true, trim: true })
    url: string

    @prop({ type: () => [String] })
    tags: string[]

    @prop({ type: () => [Comment] })
    comments: Comment[]
}

const ProductModel = getModelForClass(Product)
export default ProductModel
