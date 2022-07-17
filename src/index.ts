import { connect } from 'mongoose'

const connectDB = async () => {
    const db = await connect('mongodb://localhost/typegoosedb')
    console.log('MongoDB Connected ->', db.connection?.db.databaseName)
}

connectDB()

const executeQueries = async () => {
    //USer Model
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
    // Product Model
    /*const product = await Product.create({
        name: 'Product 2',
        price: 100,
        url: 'product-01',
        tags: ['tag1', 'tag2'],
        comments: [
            {
                text: 'Comment 1',
            },
            {
                text: 'Comment 2',
            },
        ],
        owner: '62d30cd8def993f578ebb664',
    })*/
    /*const roles = await Role.insertMany([{ name: 'admin' }, { name: 'user' }, { name: 'guest' }])
    console.log(roles)*/
    /* const product = await Product.findById('62d3511713200d41b5e5e639').populate('owner')
     console.log(product)*/
    /*const user = new User({
        firstname: 'John',
        lastname: 'Doe',
        email: 'prueba@gmail.com',
        password: '123456',
        roles: ['62d3768d04568fa1bbded677', '62d3768d04568fa1bbded678'],
    })

    await user.save()*/
    /*const user = await User.findById('62d3784f33fb3aaf03f87d20').populate('roles', 'name -_id')
    console.log(user)*/
    /*const result = await User.findByFirstname('Gustavo')
    console.log(result)*/
    /*const user = new User({
        firstname: 'Nadia',
        lastname: 'Doe',
        email: 'prueba@gmail.com',
        roles: ['62d3768d04568fa1bbded677', '62d3768d04568fa1bbded678'],
    })

    user.password = user.encryptPassword('123456')
    await user.save()

    console.log(user)*/
}

executeQueries()
