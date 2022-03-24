import { Schema, model, models } from 'mongoose'

const sportSchema = new Schema(
  {
    sport: String,
  },
  {
    versionKey: false,
  }
)

export default models.Sport || model('Sport', sportSchema)
