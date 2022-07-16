import { prop } from '@typegoose/typegoose'

class User {
    @prop()
    firstname
    @prop()
    lastname
    @prop()
    email
    @prop()
    password
}
