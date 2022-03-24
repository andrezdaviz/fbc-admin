import { Schema, model, models } from 'mongoose'

const teamSchema = new Schema(
  {
    team: String,
  },
  {
    versionKey: false,
  }
)

export default models.Team || model('Team', teamSchema)
