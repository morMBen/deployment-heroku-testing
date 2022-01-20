const express = require('express');

//
const cors = require('cors');
const path = require('path');
//

const app = express();

const port = process.env.PORT || 5000;

//
// console.log(__dirname.split('\\').slice(0, -1).join('\\'));
// const publicPath = path.join(__dirname, '../', 'client/build');
const publicPath = path.join(
  __dirname.split('\\').slice(0, -1).join('\\'),
  'client/build'
);
app.use(cors());
app.use(express.static(publicPath));
//

app.use(express.json());

app.get('/api/users', (req, res) => {
  try {
    res.status(200).send({ userName: 'Bob' });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

//
app.get('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});
//

app.listen(port, () => {
  console.log('listening on port ' + port);
});
