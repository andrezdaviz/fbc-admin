import { Schema, model, models } from 'mongoose'

const countrySchema = new Schema(
  {
    country: String,
  },
  {
    versionKey: false,
  }
)

export default models.Country || model('Country', countrySchema)
