import { Schema, model, models } from 'mongoose'

const leagueSchema = new Schema(
  {
    league: String,
    sport: { type: Schema.Types.ObjectId, ref: 'Sport' },
    country: { type: Schema.Types.ObjectId, ref: 'Country' },
  },
  {
    versionKey: false,
  }
)

export default models.League || model('League', leagueSchema)
