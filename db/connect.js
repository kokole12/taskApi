import mongoose from "mongoose"

export const conectTODB = (url) => {
    mongoose.connect(url)
    .then(() => console.log('connected to db'))
    .catch((err) => console.log(err))
}
