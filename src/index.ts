import { connect } from 'mongoose'

const connectDB = async () => {
    const db = await connect('mongodb://localhost/typegoosedb')
    console.log('MongoDB Connected ->', db.connection?.db.databaseName)
}

connectDB()

const executeQueries = async () => {
    /*const user = new User({
        firstname: 'John',
        lastname: 'Doe',
        email: 'johndoe@gmail.com',
        password: '123456',
    })

    await user.save()*/
    // const users = await User.find({}, { firstname: 1, _id: 0 })
    // const user = await User.findOne({ email: 'johndoe@gmail.com' })
    // const user = await User.findById('62d307ddcc7d279366d5fd5a', { firstname: 1, _id: 0 })
    // const user = await User.findOneAndUpdate({ _id: '62d307a20003f16461df5390' }, { firstname: 'Nayat' }, {new:true })
    // const user = await User.findByIdAndUpdate('62d307a20003f16461df5390', { firstname: 'Nayat' }, { new: true })
    // const user = await User.findByIdAndDelete('62d3082a7b7a106b00f2f423')
    // const user = await User.findOneAndDelete({ _id: '62d3082a7b7a106b00f2f423' })
    // const user = await User.deleteMany({ email: 'johndoe@gmail.com' })
    //console.log(user)
}

executeQueries()
