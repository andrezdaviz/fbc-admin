import Team from '../models/Team'

export const searchTeam = async (req, res) => {
  const q = req.q || ''

  const results = await Team.find({ team: { $regex: '.*' + q + '.*' } })

  res.json({ results })
}
