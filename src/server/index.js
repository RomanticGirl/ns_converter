const express = require('express')

const v1Router = require('../v1/routes');

const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('test rout tt_!')
})

app.use('/api/v1', v1Router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})