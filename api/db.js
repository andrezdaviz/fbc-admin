import mongoose from 'mongoose'
const DB_URI = process.env.DB_URI || 'mongodb://localhost/db_FBC'

mongoose.connect(
  DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, res) => {
    if (!err) {
      console.log('**** CONEXION CORRECTA ****')
    } else {
      console.log('***** ERROR DE CONEXION ****')
    }
  }
)
