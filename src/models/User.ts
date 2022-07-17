import { getModelForClass, post, pre, prop, Ref, ReturnModelType } from '@typegoose/typegoose'
import { Role } from './Role'
import bycrypt from 'bcryptjs'

@pre<User>('save', function (this) {
    this.firstname = this.firstname + ' algo'
    this.password = bycrypt.hashSync(this.password, 10)
})
@post<User>('save', () => {
    console.log('User Saved')
})
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
