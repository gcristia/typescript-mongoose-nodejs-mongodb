import { getModelForClass, prop, Ref, ReturnModelType } from '@typegoose/typegoose'
import { Role } from './Role'

export class User {
    @prop({ required: true }) //mongoose
    firstname: string //typescript

    @prop({ required: true })
    lastname: string

    @prop({ required: true, trim: true })
    email: string

    @prop({ required: true, minlength: 6 })
    password: string

    @prop({ ref: () => Role })
    roles: Ref<Role>[]

    static async findByFirstname(this: ReturnModelType<typeof User>, firstname: string) {
        return this.findOne({ firstname })
    }

    encryptPassword(password: string) {
        return '123xyz' + password
    }
}

const UserModel = getModelForClass(User)
export default UserModel
