import express from 'express'
const app = express();
const port = 5051;

app.get('/', (req, res) => {
  res.send('Hello, Docker Product Services!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
