export const index = async (req, res) => {
  res.send('hola')
}

export const create = async (req, res) => {
  const form = {
    date: new Date().toISOString().substring(0, 10),
    time: new Date().toISOString().substring(11, 16),
    oddDraw: 0,
    league_id: null,
    league: null,
    teams: [
      {
        team_id: null,
        team: null,
        odd: 0,
      },
    ],
  }

  return res.status(200).json({ form })
}

export const store = async (req, res) => {
  const { date, time, oddDraw, league_id, teams } = req.body
  console.log('store')
}
