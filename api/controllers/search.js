import Country from '../models/Country'
import League from '../models/League'
import Sport from '../models/Sport'
import Team from '../models/Team'

export const teams = async (req, res) => {
  const results = await Team.find()

  res.json({ results })
}

export const sports = async (req, res) => {
  const results = await Sport.find()

  res.json({ results })
}
export const countries = async (req, res) => {
  const results = await Country.find()

  res.json({ results })
}
export const leagues = async (req, res) => {
  const results = await League.find()

  res.json({ results })
}
