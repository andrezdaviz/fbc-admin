import { Schema, model, models } from 'mongoose'

const eventSchema = new Schema(
  {
    teams: [
      {
        team: {
          type: Schema.Types.ObjectId,
          ref: 'Team',
        },
        odd: Number,
      },
    ],
    league: { type: Schema.Types.ObjectId, ref: 'League' },
    timestamp: Date,
    oddDraw: Number,
  },
  {
    versionKey: false,
  }
)

export default models.Event || model('Event', eventSchema)
