const express = require('express');
const graphHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema')

const app = express();

app.use(cors());

mongoose.connect('mongodb://zhurik:rkty1918234@ds251284.mlab.com:51284/english-react')
mongoose.connection.once('open', () => console.log('databese connect'))

app.use('/graphql', graphHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('localhost:4000')
})