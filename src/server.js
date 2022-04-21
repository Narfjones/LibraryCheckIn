import color from 'chalk'
//const color = require(chalk)
import app from './app.js'

const port = 4000

app.listen(port, () =>
  console.log(`The server is listning on port ${color.green(port)}`)
)